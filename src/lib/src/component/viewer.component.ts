/// <reference types="three" />
/// <reference path="viewer-typings.d.ts" />

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy,
  Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeUntil';

import { ScriptService } from '../service/script.service';
import {
  FitToViewEventArgs,
  FullscreenEventArgs,
  GeometryLoadedEventArgs,
  HideEventArgs,
  IsolateEventArgs,
  ObjectTreeCreatedEventArgs,
  ObjectTreeUnavailableEventArgs, ResetEventArgs,
  SelectionChangedEventArgs,
  ShowEventArgs,
  ViewerEventArgs,
} from '../extensions/extension';
import { BasicExtension } from '../extensions/basic-extension';

export interface DocumentChangedEvent {
  document: Autodesk.Viewing.Document;
  viewingApplication: Autodesk.Viewing.ViewingApplication;
  viewerComponent: ViewerComponent;
}

export interface ItemLoadedEvent {
  item: Autodesk.Viewing.ViewerItem;
  viewingApplication: Autodesk.Viewing.ViewingApplication;
  currentViewer: Autodesk.Viewing.Viewer3D;
  viewerComponent: ViewerComponent;
}

export interface ViewingApplicationInitializedEvent {
  viewingApplication: Autodesk.Viewing.ViewingApplication;
  viewerComponent: ViewerComponent;
}

export interface ViewerOptions {
  initializerOptions: Autodesk.Viewing.InitializerOptions;
  viewerApplicationOptions?: Autodesk.Viewing.ViewingApplicationOptions;
  viewerConfig?: Autodesk.Viewing.ViewerConfig;
  headlessViewer?: boolean;
  showFirstViewable?: boolean;
  onViewerScriptsLoaded?: () => void;
  onViewingApplicationInitialized: (args: ViewingApplicationInitializedEvent) => void;
}


@Component({
  selector: 'adsk-forge-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewerComponent implements OnDestroy {
  readonly containerId = 'ng2-adsk-forge-viewer-container';

  @Output() public onDocumentChanged = new EventEmitter<DocumentChangedEvent>();
  @Output() public onItemLoaded = new EventEmitter<ItemLoadedEvent>();
  @Output() public onError = new EventEmitter<Autodesk.Viewing.ErrorCodes>();

  // Viewer events
  @Output() public onFitToView = new EventEmitter<FitToViewEventArgs>();
  @Output() public onFullscreen = new EventEmitter<FullscreenEventArgs>();
  @Output() public onGeometryLoaded = new EventEmitter<GeometryLoadedEventArgs>();
  @Output() public onHide = new EventEmitter<HideEventArgs>();
  @Output() public onIsolate = new EventEmitter<IsolateEventArgs>();
  @Output() public onObjectTreeCreated = new EventEmitter<ObjectTreeCreatedEventArgs>();
  @Output() public onObjectTreeUnavailable = new EventEmitter<ObjectTreeUnavailableEventArgs>();
  @Output() public onReset = new EventEmitter<ResetEventArgs>();
  @Output() public onSelectionChanged = new EventEmitter<SelectionChangedEventArgs>();
  @Output() public onShow = new EventEmitter<ShowEventArgs>();

  // Debugging
  @Input() public showDebugMessages: boolean = false;

  private _viewerOptions: ViewerOptions = null;
  private viewerInitialized = false;
  private viewerApp: Autodesk.Viewing.ViewingApplication;
  private documentId: string;
  private unsubscribe: Subject<boolean> = new Subject();
  private basicExt: BasicExtension;

  /**
   * Helper to allow callers to specify documentId with or without the required urn: prefix
   */
  private static verifyUrn(documentId: string): string {
    return (documentId.startsWith('urn:')) ? documentId : `urn:${documentId}`;
  }

  constructor(private script: ScriptService) { }

  @Input() public set viewerOptions(options: ViewerOptions) {
    if (!this.viewerInitialized && options) {
      this._viewerOptions = options;
      void this.initialiseApplication();
    }
  }

  public get viewerOptions() {
    return this._viewerOptions;
  }

  ngOnDestroy() {
    this.unregisterBasicExtension();

    if (this.viewerApp) {
      const viewer = this.viewerApp.getCurrentViewer();
      if (viewer) {
        viewer.tearDown();
        viewer.uninitialize();
      }
    }

    this.viewerApp = null;
    this.viewerInitialized = false;

    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  /**
   * Helper method to get some default viewer options
   */
  public getDefaultViewerOptions(
    onViewingApplicationInitialized: (args: ViewingApplicationInitializedEvent) => void,
    getAccessToken: (onGetAccessToken: (token: string, expire: number) => void) => void,
  ): ViewerOptions {
    return {
      initializerOptions: {
        env: 'AutodeskProduction',
        getAccessToken,
      },
      onViewingApplicationInitialized,
    };
  }

  /**
   * Get a reference to the current viewing application
   */
  public get ViewerApplication() {
    return this.viewerApp;
  }

  /**
   * Get a reference to the current 3D viewer
   */
  public get Viewer3D() {
    return this.viewerApp.getCurrentViewer();
  }

  /**
   * Get the document urn that has been loaded
   */
  public get DocumentId() {
    return this.documentId;
  }

  /**
   * Set the document urn, which triggers the viewer to load the document
   */
  public set DocumentId(value: string) {
    this.documentId = value;
    this.loadDocument(this.documentId);
  }

  public get basicExtension() {
    return this.basicExt;
  }

  public get extensionEvents(): Observable<ViewerEventArgs> | null {
    if (this.basicExt) {
      return this.basicExt.viewerEvents;
    }
  }

  public selectItem(item: Autodesk.Viewing.ViewerItem|Autodesk.Viewing.BubbleNode) {
    this.viewerApp.selectItem(item, this.onItemLoadSuccess.bind(this), this.onItemLoadFail.bind(this));
  }

  /**
   * We don't bundle Autodesk's scripts with the component, and we don't really want users to have
   * to add the scripts to their index.html pages. So we'll load them when required.
   */
  private loadScripts(): Promise<void> {
    return this.script.load(
      'https://developer.api.autodesk.com/modelderivative/v2/viewers/viewer3D.min.js?v=6.5.*',
    )
      .then((data) => {
        this.log('script loaded ', data);
      })
      .catch(error => this.error(error));
  }

  /**
   * Initialises a ViewingApplication
   */
  private async initialiseApplication() {
    // Load scripts first
    await this.loadScripts();
    if (this.viewerOptions.onViewerScriptsLoaded) this.viewerOptions.onViewerScriptsLoaded();

    // Check if the viewer has already been initialised - this isn't the nicest, but we've set the env in our
    // options above so we at least know that it was us who did this!
    if (!Autodesk.Viewing.Private.env) {
      Autodesk.Viewing.Initializer(this.viewerOptions.initializerOptions, () => {
        this.initialized();
      });
    } else {
      // We need to give an initialised viewing application a tick to allow the DOM element
      // to be established before we re-draw
      setTimeout(() => {
        this.initialized();
      });
    }
  }

  private initialized() {
    this.viewerApp = new Autodesk.Viewing.ViewingApplication(this.containerId,
                                                             this.viewerOptions.viewerApplicationOptions);

    // Register an extension to help us raise events
    const extName = this.registerBasicExtension();
    const config = this.addBasicExtensionConfig(extName);

    // Register a viewer with the application (passign through any additional config)
    this.viewerApp.registerViewer(
      this.viewerApp.k3D,
      (this.viewerOptions.headlessViewer) ? Autodesk.Viewing.Viewer3D : Autodesk.Viewing.Private.GuiViewer3D,
      config,
    );

    // Viewer is ready - scripts are loaded and we've create a new viewing application
    this.viewerInitialized = true;
    this.viewerOptions.onViewingApplicationInitialized({ viewingApplication: this.viewerApp, viewerComponent: this });
  }

  /**
   * Loads a model in to the viewer via it's urn
   */
  private loadDocument(documentId: string) {
    if (!documentId) {
      return;
    }

    // Add urn: to the beginning of document id if needed
    this.viewerApp.loadDocument(ViewerComponent.verifyUrn(documentId),
                                this.onDocumentLoadSuccess.bind(this),
                                this.onDocumentLoadFailure.bind(this));
  }

  /**
   * Document successfully loaded
   */
  private onDocumentLoadSuccess(document: Autodesk.Viewing.Document) {
    if (!this.viewerApp.bubble) return;

    // Emit an event so the caller can do something
    // TODO: config option to specify which viewable to display (how?)
    this.onDocumentChanged.emit({ document, viewingApplication: this.viewerApp, viewerComponent: this });

    if (this.viewerOptions.showFirstViewable === undefined || this.viewerOptions.showFirstViewable) {
      // This will be the default behaviour -- show the first viewable
      // We could still make use of Document.getSubItemsWithProperties()
      // However, when using a ViewingApplication, we have access to the **bubble** attribute,
      // which references the root node of a graph that wraps each object from the Manifest JSON.
      const viewables = this.viewerApp.bubble.search(Autodesk.Viewing.BubbleNode.MODEL_NODE);

      if (viewables && viewables.length > 0) {
        this.viewerApp.selectItem(viewables[0].data, this.onItemLoadSuccess.bind(this), this.onItemLoadFail.bind(this));
      }
    }
  }

  /**
   * Failed to load document
   */
  private onDocumentLoadFailure(errorCode: Autodesk.Viewing.ErrorCodes) {
    this.error('onDocumentLoadFailure() - errorCode:' + errorCode);
    this.onError.emit(errorCode);
  }

  /**
   * View from the document was successfully loaded
   */
  private onItemLoadSuccess(viewer: Autodesk.Viewing.Viewer3D, item: Autodesk.Viewing.ViewerItem) {
    this.log('onItemLoadSuccess()', viewer, item);

    this.onItemLoaded.emit({
      item,
      currentViewer: viewer,
      viewingApplication: this.viewerApp,
      viewerComponent: this,
    });
  }

  /**
   * Failed to load a view from the document
   */
  private onItemLoadFail(errorCode: Autodesk.Viewing.ErrorCodes) {
    this.error('onItemLoadFail() - errorCode:' + errorCode);
    this.onError.emit(errorCode);
  }

  /**
   * Register our BasicExtension with the Forge Viewer
   */
  private registerBasicExtension(): string {
    BasicExtension.registerExtension(BasicExtension.extensionName, this.extensionLoaded.bind(this));
    return BasicExtension.extensionName;
  }

  /**
   * Subscript to BasicExtension events when the extension has been
   * succesfully loaded by the viewer.
   */
  private extensionLoaded(ext: BasicExtension) {
    this.basicExt = ext;
    ext.viewerEvents
      .takeUntil(this.unsubscribe)
      .subscribe((item: ViewerEventArgs) => {
        this.log(item);

        if (item instanceof FitToViewEventArgs) {
          this.onFitToView.emit(item);
        } else if (item instanceof FullscreenEventArgs) {
          this.onFullscreen.emit(item);
        } else if (item instanceof GeometryLoadedEventArgs) {
          this.onGeometryLoaded.emit(item);
        } else if (item instanceof HideEventArgs) {
          this.onHide.emit(item);
        } else if (item instanceof IsolateEventArgs) {
          this.onIsolate.emit(item);
        } else if (item instanceof ObjectTreeCreatedEventArgs) {
          this.onObjectTreeCreated.emit(item);
        } else if (item instanceof ObjectTreeUnavailableEventArgs) {
          this.onObjectTreeUnavailable.emit(item);
        } else if (item instanceof ResetEventArgs) {
          this.onReset.emit(item);
        } else if (item instanceof SelectionChangedEventArgs) {
          this.onSelectionChanged.emit(item);
        } else if (item instanceof ShowEventArgs) {
          this.onShow.emit(item);
        }
      });
  }

  private unregisterBasicExtension() {
    BasicExtension.unregisterExtension(BasicExtension.extensionName);
    this.basicExt = null;
  }

  /**
   * Add list of extensions to the viewer config that has been provided
   * The allows the user to register their own extensions.
   */
  private addBasicExtensionConfig(extName: string): Autodesk.Viewing.ViewerConfig {
    const config: Autodesk.Viewing.ViewerConfig = Object.assign(
      {},
      this.viewerOptions.viewerConfig,
      { extensions: [] },
    );

    // We will always load our basic extension with any others specified by the caller
    if (this.viewerOptions.viewerConfig && this.viewerOptions.viewerConfig.extensions) {
      config.extensions = [...this.viewerOptions.viewerConfig.extensions, extName];
    } else {
      config.extensions = [extName];
    }

    return config;
  }

  private log(message?: any, ...optionalParams: any[]) {
    if (!this.showDebugMessages) return;
    console.log(message, optionalParams);
  }

  private error(message?: any, ...optionalParams: any[]) {
    if (!this.showDebugMessages) return;
    console.error(message, optionalParams);
  }
}
