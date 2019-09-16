(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/observable/fromEvent'), require('rxjs/observable/merge'), require('rxjs/add/operator/map'), require('@angular/core'), require('@angular/common/http'), require('rxjs/Subject'), require('rxjs/add/operator/takeUntil'), require('@angular/platform-browser')) :
	typeof define === 'function' && define.amd ? define(['exports', 'rxjs/observable/fromEvent', 'rxjs/observable/merge', 'rxjs/add/operator/map', '@angular/core', '@angular/common/http', 'rxjs/Subject', 'rxjs/add/operator/takeUntil', '@angular/platform-browser'], factory) :
	(factory((global.ng2AdskForgeViewer = global.ng2AdskForgeViewer || {}),global.Rx.Observable,global.Rx.Observable,global.Rx.Observable.prototype,global.ng.core,global.ng['common-http'],global.Rx,global.Rx.Observable.prototype,global.ng['platform-browser']));
}(this, (function (exports,rxjs_observable_fromEvent,rxjs_observable_merge,rxjs_add_operator_map,_angular_core,_angular_common_http,rxjs_Subject,rxjs_add_operator_takeUntil,_angular_platformBrowser) { 'use strict';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var ViewerEventArgs = (function () {
    function ViewerEventArgs() {
    }
    return ViewerEventArgs;
}());
var AggregationSelectionChangedEventArgs = (function (_super) {
    __extends(AggregationSelectionChangedEventArgs, _super);
    function AggregationSelectionChangedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT;
        return _this;
    }
    return AggregationSelectionChangedEventArgs;
}(ViewerEventArgs));
var AnimationReadyEventArgs = (function (_super) {
    __extends(AnimationReadyEventArgs, _super);
    function AnimationReadyEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.ANIMATION_READY_EVENT;
        return _this;
    }
    return AnimationReadyEventArgs;
}(ViewerEventArgs));
var CameraChangedEventArgs = (function (_super) {
    __extends(CameraChangedEventArgs, _super);
    function CameraChangedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.CAMERA_CHANGE_EVENT;
        return _this;
    }
    return CameraChangedEventArgs;
}(ViewerEventArgs));
var CutplanesChangedEventArgs = (function (_super) {
    __extends(CutplanesChangedEventArgs, _super);
    function CutplanesChangedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.CUTPLANES_CHANGE_EVENT;
        return _this;
    }
    return CutplanesChangedEventArgs;
}(ViewerEventArgs));
var EscapeEventArgs = (function (_super) {
    __extends(EscapeEventArgs, _super);
    function EscapeEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.ESCAPE_EVENT;
        return _this;
    }
    return EscapeEventArgs;
}(ViewerEventArgs));
var ExplodeChangedEventArgs = (function (_super) {
    __extends(ExplodeChangedEventArgs, _super);
    function ExplodeChangedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.EXPLODE_CHANGE_EVENT;
        return _this;
    }
    return ExplodeChangedEventArgs;
}(ViewerEventArgs));
/**
 * @abstract
 */
var ExtensionLoadedUnloadedEventArgs = (function (_super) {
    __extends(ExtensionLoadedUnloadedEventArgs, _super);
    function ExtensionLoadedUnloadedEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ExtensionLoadedUnloadedEventArgs;
}(ViewerEventArgs));
var ExtensionLoadedEventArgs = (function (_super) {
    __extends(ExtensionLoadedEventArgs, _super);
    function ExtensionLoadedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.EXTENSION_LOADED_EVENT;
        return _this;
    }
    return ExtensionLoadedEventArgs;
}(ExtensionLoadedUnloadedEventArgs));
var ExtensionUnloadedEventArgs = (function (_super) {
    __extends(ExtensionUnloadedEventArgs, _super);
    function ExtensionUnloadedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.EXTENSION_UNLOADED_EVENT;
        return _this;
    }
    return ExtensionUnloadedEventArgs;
}(ExtensionLoadedUnloadedEventArgs));
var FinalFrameRenderedChangedEventArgs = (function (_super) {
    __extends(FinalFrameRenderedChangedEventArgs, _super);
    function FinalFrameRenderedChangedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.FINAL_FRAME_RENDERED_CHANGED_EVENT;
        return _this;
    }
    return FinalFrameRenderedChangedEventArgs;
}(ViewerEventArgs));
var FitToViewEventArgs = (function (_super) {
    __extends(FitToViewEventArgs, _super);
    function FitToViewEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.FIT_TO_VIEW_EVENT;
        return _this;
    }
    return FitToViewEventArgs;
}(ViewerEventArgs));
var FragmentsLoadedEventArgs = (function (_super) {
    __extends(FragmentsLoadedEventArgs, _super);
    function FragmentsLoadedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.FRAGMENTS_LOADED_EVENT;
        return _this;
    }
    return FragmentsLoadedEventArgs;
}(ViewerEventArgs));
var FullscreenEventArgs = (function (_super) {
    __extends(FullscreenEventArgs, _super);
    function FullscreenEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.FULLSCREEN_MODE_EVENT;
        return _this;
    }
    return FullscreenEventArgs;
}(ViewerEventArgs));
var GeometryLoadedEventArgs = (function (_super) {
    __extends(GeometryLoadedEventArgs, _super);
    function GeometryLoadedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.GEOMETRY_LOADED_EVENT;
        return _this;
    }
    return GeometryLoadedEventArgs;
}(ViewerEventArgs));
var HideEventArgs = (function (_super) {
    __extends(HideEventArgs, _super);
    function HideEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.HIDE_EVENT;
        return _this;
    }
    return HideEventArgs;
}(ViewerEventArgs));
var HyperlinkEventArgs = (function (_super) {
    __extends(HyperlinkEventArgs, _super);
    function HyperlinkEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.HYPERLINK_EVENT;
        return _this;
    }
    return HyperlinkEventArgs;
}(ViewerEventArgs));
var IsolateEventArgs = (function (_super) {
    __extends(IsolateEventArgs, _super);
    function IsolateEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.ISOLATE_EVENT;
        return _this;
    }
    return IsolateEventArgs;
}(ViewerEventArgs));
var LayerVisibilityEventArgs = (function (_super) {
    __extends(LayerVisibilityEventArgs, _super);
    function LayerVisibilityEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.LAYER_VISIBILITY_CHANGED_EVENT;
        return _this;
    }
    return LayerVisibilityEventArgs;
}(ViewerEventArgs));
var LoadMissingGeometryEventArgs = (function (_super) {
    __extends(LoadMissingGeometryEventArgs, _super);
    function LoadMissingGeometryEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.LOAD_MISSING_GEOMETRY;
        return _this;
    }
    return LoadMissingGeometryEventArgs;
}(ViewerEventArgs));
var ModelRootLoadedEventArgs = (function (_super) {
    __extends(ModelRootLoadedEventArgs, _super);
    function ModelRootLoadedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT;
        return _this;
    }
    return ModelRootLoadedEventArgs;
}(ViewerEventArgs));
var ModelUnloadedEventArgs = (function (_super) {
    __extends(ModelUnloadedEventArgs, _super);
    function ModelUnloadedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.MODEL_UNLOADED_EVENT;
        return _this;
    }
    return ModelUnloadedEventArgs;
}(ViewerEventArgs));
var NavigationModeChangedEventArgs = (function (_super) {
    __extends(NavigationModeChangedEventArgs, _super);
    function NavigationModeChangedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.NAVIGATION_MODE_CHANGED_EVENT;
        return _this;
    }
    return NavigationModeChangedEventArgs;
}(ViewerEventArgs));
/**
 * @abstract
 */
var ObjectTreeEventArgs = (function (_super) {
    __extends(ObjectTreeEventArgs, _super);
    function ObjectTreeEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ObjectTreeEventArgs;
}(ViewerEventArgs));
var ObjectTreeCreatedEventArgs = (function (_super) {
    __extends(ObjectTreeCreatedEventArgs, _super);
    function ObjectTreeCreatedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT;
        return _this;
    }
    return ObjectTreeCreatedEventArgs;
}(ObjectTreeEventArgs));
var ObjectTreeUnavailableEventArgs = (function (_super) {
    __extends(ObjectTreeUnavailableEventArgs, _super);
    function ObjectTreeUnavailableEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.OBJECT_TREE_UNAVAILABLE_EVENT;
        return _this;
    }
    return ObjectTreeUnavailableEventArgs;
}(ObjectTreeEventArgs));
/**
 * @abstract
 */
var PrefEventArgs = (function (_super) {
    __extends(PrefEventArgs, _super);
    function PrefEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PrefEventArgs;
}(ViewerEventArgs));
var PrefChangedEventArgs = (function (_super) {
    __extends(PrefChangedEventArgs, _super);
    function PrefChangedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.PREF_CHANGED_EVENT;
        return _this;
    }
    return PrefChangedEventArgs;
}(PrefEventArgs));
var PrefResetEventArgs = (function (_super) {
    __extends(PrefResetEventArgs, _super);
    function PrefResetEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.PREF_RESET_EVENT;
        return _this;
    }
    return PrefResetEventArgs;
}(PrefEventArgs));
var ProgressUpdateEventArgs = (function (_super) {
    __extends(ProgressUpdateEventArgs, _super);
    function ProgressUpdateEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.PROGRESS_UPDATE_EVENT;
        return _this;
    }
    return ProgressUpdateEventArgs;
}(ViewerEventArgs));
var RenderOptionChangedEventArgs = (function (_super) {
    __extends(RenderOptionChangedEventArgs, _super);
    function RenderOptionChangedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.RENDER_OPTION_CHANGED_EVENT;
        return _this;
    }
    return RenderOptionChangedEventArgs;
}(ViewerEventArgs));
var RenderPresentedEventArgs = (function (_super) {
    __extends(RenderPresentedEventArgs, _super);
    function RenderPresentedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.RENDER_PRESENTED_EVENT;
        return _this;
    }
    return RenderPresentedEventArgs;
}(ViewerEventArgs));
var ResetEventArgs = (function (_super) {
    __extends(ResetEventArgs, _super);
    function ResetEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.RESET_EVENT;
        return _this;
    }
    return ResetEventArgs;
}(ViewerEventArgs));
var RestoreDefaultSettingsEventArgs = (function (_super) {
    __extends(RestoreDefaultSettingsEventArgs, _super);
    function RestoreDefaultSettingsEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.RESTORE_DEFAULT_SETTINGS_EVENT;
        return _this;
    }
    return RestoreDefaultSettingsEventArgs;
}(ViewerEventArgs));
var SelectionChangedEventArgs = (function (_super) {
    __extends(SelectionChangedEventArgs, _super);
    function SelectionChangedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.SELECTION_CHANGED_EVENT;
        return _this;
    }
    return SelectionChangedEventArgs;
}(ViewerEventArgs));
var ShowEventArgs = (function (_super) {
    __extends(ShowEventArgs, _super);
    function ShowEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.SHOW_EVENT;
        return _this;
    }
    return ShowEventArgs;
}(ViewerEventArgs));
var TexturesLoadedEventArgs = (function (_super) {
    __extends(TexturesLoadedEventArgs, _super);
    function TexturesLoadedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.TEXTURES_LOADED_EVENT;
        return _this;
    }
    return TexturesLoadedEventArgs;
}(ViewerEventArgs));
var ToolChangedEventArgs = (function (_super) {
    __extends(ToolChangedEventArgs, _super);
    function ToolChangedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.TOOL_CHANGE_EVENT;
        return _this;
    }
    return ToolChangedEventArgs;
}(ViewerEventArgs));
var ViewerInitializedEventArgs = (function (_super) {
    __extends(ViewerInitializedEventArgs, _super);
    function ViewerInitializedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.VIEWER_INITIALIZED;
        return _this;
    }
    return ViewerInitializedEventArgs;
}(ViewerEventArgs));
var ViewerResizeEventArgs = (function (_super) {
    __extends(ViewerResizeEventArgs, _super);
    function ViewerResizeEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.VIEWER_RESIZE_EVENT;
        return _this;
    }
    return ViewerResizeEventArgs;
}(ViewerEventArgs));
var ViewerStateRestoredEventArgs = (function (_super) {
    __extends(ViewerStateRestoredEventArgs, _super);
    function ViewerStateRestoredEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.VIEWER_STATE_RESTORED_EVENT;
        return _this;
    }
    return ViewerStateRestoredEventArgs;
}(ViewerEventArgs));
var ViewerUnInitializedEventArgs = (function (_super) {
    __extends(ViewerUnInitializedEventArgs, _super);
    function ViewerUnInitializedEventArgs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = Autodesk.Viewing.VIEWER_UNINITIALIZED;
        return _this;
    }
    return ViewerUnInitializedEventArgs;
}(ViewerEventArgs));
/**
 * Base extension that all other extensions can inherit from
 * @abstract
 */
var Extension = (function () {
    function Extension(viewer, options) {
        this.viewer = undefined;
        this.extOptions = undefined;
        this.eventArgsTypeMap = {};
        this.viewer = viewer;
        this.extOptions = options;
        this.registerEventTypes();
    }
    /**
     * @param {?} extensionName
     * @param {?} extension
     * @return {?}
     */
    Extension.registerExtension = /**
     * @param {?} extensionName
     * @param {?} extension
     * @return {?}
     */
    function (extensionName, extension) {
        Autodesk.Viewing.theExtensionManager.registerExtension(extensionName, extension);
    };
    /**
     * @param {?} extensionName
     * @return {?}
     */
    Extension.unregisterExtension = /**
     * @param {?} extensionName
     * @return {?}
     */
    function (extensionName) {
        Autodesk.Viewing.theExtensionManager.unregisterExtension(extensionName);
    };
    /** Register event args types that we will cast to 'proper' objects */
    /**
     * Register event args types that we will cast to 'proper' objects
     * @return {?}
     */
    Extension.prototype.registerEventTypes = /**
     * Register event args types that we will cast to 'proper' objects
     * @return {?}
     */
    function () {
        // tslint:disable:max-line-length
        this.eventArgsTypeMap[Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT] = AggregationSelectionChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.ANIMATION_READY_EVENT] = AnimationReadyEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.CAMERA_CHANGE_EVENT] = CameraChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.CUTPLANES_CHANGE_EVENT] = CutplanesChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.ESCAPE_EVENT] = EscapeEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.EXPLODE_CHANGE_EVENT] = ExplodeChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.EXTENSION_LOADED_EVENT] = ExtensionLoadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.EXTENSION_UNLOADED_EVENT] = ExtensionUnloadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.FINAL_FRAME_RENDERED_CHANGED_EVENT] = FinalFrameRenderedChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.FIT_TO_VIEW_EVENT] = FitToViewEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.FRAGMENTS_LOADED_EVENT] = FragmentsLoadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.FULLSCREEN_MODE_EVENT] = FullscreenEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.GEOMETRY_LOADED_EVENT] = GeometryLoadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.HIDE_EVENT] = HideEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.HYPERLINK_EVENT] = HyperlinkEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.ISOLATE_EVENT] = IsolateEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.LAYER_VISIBILITY_CHANGED_EVENT] = LayerVisibilityEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.LOAD_MISSING_GEOMETRY] = LoadMissingGeometryEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT] = ModelRootLoadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.MODEL_UNLOADED_EVENT] = ModelUnloadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.NAVIGATION_MODE_CHANGED_EVENT] = NavigationModeChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT] = ObjectTreeCreatedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.OBJECT_TREE_UNAVAILABLE_EVENT] = ObjectTreeUnavailableEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.PREF_CHANGED_EVENT] = PrefChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.PREF_RESET_EVENT] = PrefResetEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.PROGRESS_UPDATE_EVENT] = ProgressUpdateEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.RENDER_OPTION_CHANGED_EVENT] = RenderOptionChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.RENDER_PRESENTED_EVENT] = RenderPresentedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.RESET_EVENT] = ResetEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.RESTORE_DEFAULT_SETTINGS_EVENT] = RestoreDefaultSettingsEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.SELECTION_CHANGED_EVENT] = SelectionChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.SHOW_EVENT] = ShowEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.TEXTURES_LOADED_EVENT] = TexturesLoadedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.TOOL_CHANGE_EVENT] = ToolChangedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.VIEWER_INITIALIZED] = ViewerInitializedEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.VIEWER_RESIZE_EVENT] = ViewerResizeEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.VIEWER_STATE_RESTORED_EVENT] = ViewerStateRestoredEventArgs;
        this.eventArgsTypeMap[Autodesk.Viewing.VIEWER_UNINITIALIZED] = ViewerUnInitializedEventArgs;
        // tslint:enable:max-line-length
    };
    /** Cast Viewer event args to class */
    /**
     * Cast Viewer event args to class
     * @param {?} args
     * @return {?}
     */
    Extension.prototype.castArgs = /**
     * Cast Viewer event args to class
     * @param {?} args
     * @return {?}
     */
    function (args) {
        if (Array.isArray(args)) {
            return args.map(this.castArgs);
        }
        if (!args || typeof args !== 'object' || !args.hasOwnProperty('type')) {
            // Can't cast this object
            return args;
        }
        // Create new object of appropriate type
        var /** @type {?} */ clazz = this.eventArgsTypeMap[args.type];
        var /** @type {?} */ typedItem = Object.create(clazz.prototype);
        // Cast any properties
        for (var _i = 0, _a = Object.keys(args); _i < _a.length; _i++) {
            var k = _a[_i];
            typedItem[k] = this.castArgs(args[k]);
        }
        return typedItem;
    };
    Extension.extensionName = '';
    return Extension;
}());

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BasicExtension = (function (_super) {
    __extends$1(BasicExtension, _super);
    function BasicExtension() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.eventStreams = [];
        _this.events = [
            Autodesk.Viewing.FIT_TO_VIEW_EVENT,
            Autodesk.Viewing.FULLSCREEN_MODE_EVENT,
            Autodesk.Viewing.GEOMETRY_LOADED_EVENT,
            Autodesk.Viewing.HIDE_EVENT,
            Autodesk.Viewing.ISOLATE_EVENT,
            Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,
            Autodesk.Viewing.OBJECT_TREE_UNAVAILABLE_EVENT,
            Autodesk.Viewing.RESET_EVENT,
            Autodesk.Viewing.SELECTION_CHANGED_EVENT,
            Autodesk.Viewing.SHOW_EVENT,
        ];
        return _this;
    }
    /**
     * @param {?} extensionName
     * @param {?} callback
     * @return {?}
     */
    BasicExtension.registerExtension = /**
     * @param {?} extensionName
     * @param {?} callback
     * @return {?}
     */
    function (extensionName, callback) {
        BasicExtension.callback = callback;
        _super.registerExtension.call(this, BasicExtension.extensionName, BasicExtension);
    };
    /**
     * @return {?}
     */
    BasicExtension.prototype.load = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.events.forEach(function (eventName) {
            var /** @type {?} */ obs = rxjs_observable_fromEvent.fromEvent(_this.viewer, eventName).map(function (args) { return _this.castArgs(args); });
            _this.eventStreams.push(obs);
        });
        this.viewerEvents = rxjs_observable_merge.merge.apply(void 0, this.eventStreams);
        if (BasicExtension.debugMessages)
            console.log(BasicExtension.extensionName, 'loaded!');
        if (BasicExtension.callback)
            BasicExtension.callback(this);
        return true;
    };
    /**
     * @return {?}
     */
    BasicExtension.prototype.unload = /**
     * @return {?}
     */
    function () {
        this.eventStreams = [];
        this.viewerEvents = undefined;
        if (BasicExtension.debugMessages)
            console.log(BasicExtension.extensionName, 'unloaded!');
        return true;
    };
    BasicExtension.extensionName = 'BasicExtension';
    BasicExtension.debugMessages = false;
    BasicExtension.callback = null;
    return BasicExtension;
}(Extension));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

var ScriptService = (function () {
    function ScriptService() {
        // Nothing to do
        this.scripts = {};
    }
    /**
     * @param {...?} urls
     * @return {?}
     */
    ScriptService.prototype.load = /**
     * @param {...?} urls
     * @return {?}
     */
    function () {
        var _this = this;
        var urls = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            urls[_i] = arguments[_i];
        }
        var /** @type {?} */ promises = [];
        urls.forEach(function (src) {
            if (_this.scripts[src] && _this.scripts[src].loaded) {
                return;
            }
            _this.scripts[src] = { src: src, loaded: false };
            return promises.push(_this.loadScript(src));
        });
        return Promise.all(promises);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ScriptService.prototype.loadScript = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this.scripts[name] && _this.scripts[name].loaded) {
                resolve({ src: name, loaded: true, status: 'Already Loaded' });
                return;
            }
            // load script
            var /** @type {?} */ script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = _this.scripts[name].src;
            if (script.readyState) {
                // IE
                script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        _this.scripts[name].loaded = true;
                        resolve({ src: name, loaded: true, status: 'Loaded' });
                    }
                };
            }
            else {
                // Others
                script.onload = function () {
                    _this.scripts[name].loaded = true;
                    resolve({ src: name, loaded: true, status: 'Loaded' });
                };
            }
            script.onerror = function (error) { return resolve({ src: name, loaded: false, status: 'Loaded' }); };
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    };
    ScriptService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    ScriptService.ctorParameters = function () { return []; };
    return ScriptService;
}());

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

var ViewerComponent = (function () {
    function ViewerComponent(script) {
        this.script = script;
        this.containerId = 'ng2-adsk-forge-viewer-container';
        this.onDocumentChanged = new _angular_core.EventEmitter();
        this.onItemLoaded = new _angular_core.EventEmitter();
        this.onError = new _angular_core.EventEmitter();
        // Viewer events
        this.onFitToView = new _angular_core.EventEmitter();
        this.onFullscreen = new _angular_core.EventEmitter();
        this.onGeometryLoaded = new _angular_core.EventEmitter();
        this.onHide = new _angular_core.EventEmitter();
        this.onIsolate = new _angular_core.EventEmitter();
        this.onObjectTreeCreated = new _angular_core.EventEmitter();
        this.onObjectTreeUnavailable = new _angular_core.EventEmitter();
        this.onReset = new _angular_core.EventEmitter();
        this.onSelectionChanged = new _angular_core.EventEmitter();
        this.onShow = new _angular_core.EventEmitter();
        // Debugging
        this.showDebugMessages = false;
        this._viewerOptions = null;
        this.viewerInitialized = false;
        this.unsubscribe = new rxjs_Subject.Subject();
    }
    /**
     * Helper to allow callers to specify documentId with or without the required urn: prefix
     * @param {?} documentId
     * @return {?}
     */
    ViewerComponent.verifyUrn = /**
     * Helper to allow callers to specify documentId with or without the required urn: prefix
     * @param {?} documentId
     * @return {?}
     */
    function (documentId) {
        return (documentId.startsWith('urn:')) ? documentId : "urn:" + documentId;
    };
    Object.defineProperty(ViewerComponent.prototype, "viewerOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._viewerOptions;
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            if (!this.viewerInitialized && options) {
                this._viewerOptions = options;
                void this.initialiseApplication();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ViewerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unregisterBasicExtension();
        if (this.viewerApp) {
            var /** @type {?} */ viewer = this.viewerApp.getCurrentViewer();
            if (viewer) {
                viewer.tearDown();
                viewer.uninitialize();
            }
        }
        this.viewerApp = null;
        this.viewerInitialized = false;
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    /**
     * Helper method to get some default viewer options
     * @param {?} onViewingApplicationInitialized
     * @param {?} getAccessToken
     * @return {?}
     */
    ViewerComponent.prototype.getDefaultViewerOptions = /**
     * Helper method to get some default viewer options
     * @param {?} onViewingApplicationInitialized
     * @param {?} getAccessToken
     * @return {?}
     */
    function (onViewingApplicationInitialized, getAccessToken) {
        return {
            initializerOptions: {
                env: 'AutodeskProduction',
                getAccessToken: getAccessToken,
            },
            onViewingApplicationInitialized: onViewingApplicationInitialized,
        };
    };
    Object.defineProperty(ViewerComponent.prototype, "ViewerApplication", {
        get: /**
         * Get a reference to the current viewing application
         * @return {?}
         */
        function () {
            return this.viewerApp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerComponent.prototype, "Viewer3D", {
        get: /**
         * Get a reference to the current 3D viewer
         * @return {?}
         */
        function () {
            return this.viewerApp.getCurrentViewer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerComponent.prototype, "DocumentId", {
        get: /**
         * Get the document urn that has been loaded
         * @return {?}
         */
        function () {
            return this.documentId;
        },
        set: /**
         * Set the document urn, which triggers the viewer to load the document
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.documentId = value;
            this.loadDocument(this.documentId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerComponent.prototype, "basicExtension", {
        get: /**
         * @return {?}
         */
        function () {
            return this.basicExt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerComponent.prototype, "extensionEvents", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.basicExt) {
                return this.basicExt.viewerEvents;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    ViewerComponent.prototype.selectItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.viewerApp.selectItem(item, this.onItemLoadSuccess.bind(this), this.onItemLoadFail.bind(this));
    };
    /**
     * We don't bundle Autodesk's scripts with the component, and we don't really want users to have
     * to add the scripts to their index.html pages. So we'll load them when required.
     * @return {?}
     */
    ViewerComponent.prototype.loadScripts = /**
     * We don't bundle Autodesk's scripts with the component, and we don't really want users to have
     * to add the scripts to their index.html pages. So we'll load them when required.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.script.load('https://developer.api.autodesk.com/modelderivative/v2/viewers/viewer3D.min.js?v=6.5.*')
            .then(function (data) {
            _this.log('script loaded ', data);
        })
            .catch(function (error) { return _this.error(error); });
    };
    /**
     * Initialises a ViewingApplication
     * @return {?}
     */
    ViewerComponent.prototype.initialiseApplication = /**
     * Initialises a ViewingApplication
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Load scripts first
                    return [4 /*yield*/, this.loadScripts()];
                    case 1:
                        // Load scripts first
                        // Load scripts first
                        _a.sent();
                        if (this.viewerOptions.onViewerScriptsLoaded)
                            this.viewerOptions.onViewerScriptsLoaded();
                        // Check if the viewer has already been initialised - this isn't the nicest, but we've set the env in our
                        // options above so we at least know that it was us who did this!
                        if (!Autodesk.Viewing.Private.env) {
                            Autodesk.Viewing.Initializer(this.viewerOptions.initializerOptions, function () {
                                _this.initialized();
                            });
                        }
                        else {
                            // We need to give an initialised viewing application a tick to allow the DOM element
                            // to be established before we re-draw
                            setTimeout(function () {
                                _this.initialized();
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    ViewerComponent.prototype.initialized = /**
     * @return {?}
     */
    function () {
        this.viewerApp = new Autodesk.Viewing.ViewingApplication(this.containerId, this.viewerOptions.viewerApplicationOptions);
        // Register an extension to help us raise events
        var /** @type {?} */ extName = this.registerBasicExtension();
        var /** @type {?} */ config = this.addBasicExtensionConfig(extName);
        // Register a viewer with the application (passign through any additional config)
        this.viewerApp.registerViewer(this.viewerApp.k3D, (this.viewerOptions.headlessViewer) ? Autodesk.Viewing.Viewer3D : Autodesk.Viewing.Private.GuiViewer3D, config);
        // Viewer is ready - scripts are loaded and we've create a new viewing application
        this.viewerInitialized = true;
        this.viewerOptions.onViewingApplicationInitialized({ viewingApplication: this.viewerApp, viewerComponent: this });
    };
    /**
     * Loads a model in to the viewer via it's urn
     * @param {?} documentId
     * @return {?}
     */
    ViewerComponent.prototype.loadDocument = /**
     * Loads a model in to the viewer via it's urn
     * @param {?} documentId
     * @return {?}
     */
    function (documentId) {
        if (!documentId) {
            return;
        }
        // Add urn: to the beginning of document id if needed
        this.viewerApp.loadDocument(ViewerComponent.verifyUrn(documentId), this.onDocumentLoadSuccess.bind(this), this.onDocumentLoadFailure.bind(this));
    };
    /**
     * Document successfully loaded
     * @param {?} document
     * @return {?}
     */
    ViewerComponent.prototype.onDocumentLoadSuccess = /**
     * Document successfully loaded
     * @param {?} document
     * @return {?}
     */
    function (document) {
        if (!this.viewerApp.bubble)
            return;
        // Emit an event so the caller can do something
        // TODO: config option to specify which viewable to display (how?)
        this.onDocumentChanged.emit({ document: document, viewingApplication: this.viewerApp, viewerComponent: this });
        if (this.viewerOptions.showFirstViewable === undefined || this.viewerOptions.showFirstViewable) {
            // This will be the default behaviour -- show the first viewable
            // We could still make use of Document.getSubItemsWithProperties()
            // However, when using a ViewingApplication, we have access to the **bubble** attribute,
            // which references the root node of a graph that wraps each object from the Manifest JSON.
            var /** @type {?} */ viewables = this.viewerApp.bubble.search(Autodesk.Viewing.BubbleNode.MODEL_NODE);
            if (viewables && viewables.length > 0) {
                this.viewerApp.selectItem(viewables[0].data, this.onItemLoadSuccess.bind(this), this.onItemLoadFail.bind(this));
            }
        }
    };
    /**
     * Failed to load document
     * @param {?} errorCode
     * @return {?}
     */
    ViewerComponent.prototype.onDocumentLoadFailure = /**
     * Failed to load document
     * @param {?} errorCode
     * @return {?}
     */
    function (errorCode) {
        this.error('onDocumentLoadFailure() - errorCode:' + errorCode);
        this.onError.emit(errorCode);
    };
    /**
     * View from the document was successfully loaded
     * @param {?} viewer
     * @param {?} item
     * @return {?}
     */
    ViewerComponent.prototype.onItemLoadSuccess = /**
     * View from the document was successfully loaded
     * @param {?} viewer
     * @param {?} item
     * @return {?}
     */
    function (viewer, item) {
        this.log('onItemLoadSuccess()', viewer, item);
        this.onItemLoaded.emit({
            item: item,
            currentViewer: viewer,
            viewingApplication: this.viewerApp,
            viewerComponent: this,
        });
    };
    /**
     * Failed to load a view from the document
     * @param {?} errorCode
     * @return {?}
     */
    ViewerComponent.prototype.onItemLoadFail = /**
     * Failed to load a view from the document
     * @param {?} errorCode
     * @return {?}
     */
    function (errorCode) {
        this.error('onItemLoadFail() - errorCode:' + errorCode);
        this.onError.emit(errorCode);
    };
    /**
     * Register our BasicExtension with the Forge Viewer
     * @return {?}
     */
    ViewerComponent.prototype.registerBasicExtension = /**
     * Register our BasicExtension with the Forge Viewer
     * @return {?}
     */
    function () {
        BasicExtension.registerExtension(BasicExtension.extensionName, this.extensionLoaded.bind(this));
        return BasicExtension.extensionName;
    };
    /**
     * Subscript to BasicExtension events when the extension has been
     * succesfully loaded by the viewer.
     * @param {?} ext
     * @return {?}
     */
    ViewerComponent.prototype.extensionLoaded = /**
     * Subscript to BasicExtension events when the extension has been
     * succesfully loaded by the viewer.
     * @param {?} ext
     * @return {?}
     */
    function (ext) {
        var _this = this;
        this.basicExt = ext;
        ext.viewerEvents
            .takeUntil(this.unsubscribe)
            .subscribe(function (item) {
            _this.log(item);
            if (item instanceof FitToViewEventArgs) {
                _this.onFitToView.emit(item);
            }
            else if (item instanceof FullscreenEventArgs) {
                _this.onFullscreen.emit(item);
            }
            else if (item instanceof GeometryLoadedEventArgs) {
                _this.onGeometryLoaded.emit(item);
            }
            else if (item instanceof HideEventArgs) {
                _this.onHide.emit(item);
            }
            else if (item instanceof IsolateEventArgs) {
                _this.onIsolate.emit(item);
            }
            else if (item instanceof ObjectTreeCreatedEventArgs) {
                _this.onObjectTreeCreated.emit(item);
            }
            else if (item instanceof ObjectTreeUnavailableEventArgs) {
                _this.onObjectTreeUnavailable.emit(item);
            }
            else if (item instanceof ResetEventArgs) {
                _this.onReset.emit(item);
            }
            else if (item instanceof SelectionChangedEventArgs) {
                _this.onSelectionChanged.emit(item);
            }
            else if (item instanceof ShowEventArgs) {
                _this.onShow.emit(item);
            }
        });
    };
    /**
     * @return {?}
     */
    ViewerComponent.prototype.unregisterBasicExtension = /**
     * @return {?}
     */
    function () {
        BasicExtension.unregisterExtension(BasicExtension.extensionName);
        this.basicExt = null;
    };
    /**
     * Add list of extensions to the viewer config that has been provided
     * The allows the user to register their own extensions.
     * @param {?} extName
     * @return {?}
     */
    ViewerComponent.prototype.addBasicExtensionConfig = /**
     * Add list of extensions to the viewer config that has been provided
     * The allows the user to register their own extensions.
     * @param {?} extName
     * @return {?}
     */
    function (extName) {
        var /** @type {?} */ config = Object.assign({}, this.viewerOptions.viewerConfig, { extensions: [] });
        // We will always load our basic extension with any others specified by the caller
        if (this.viewerOptions.viewerConfig && this.viewerOptions.viewerConfig.extensions) {
            config.extensions = this.viewerOptions.viewerConfig.extensions.concat([extName]);
        }
        else {
            config.extensions = [extName];
        }
        return config;
    };
    /**
     * @param {?=} message
     * @param {...?} optionalParams
     * @return {?}
     */
    ViewerComponent.prototype.log = /**
     * @param {?=} message
     * @param {...?} optionalParams
     * @return {?}
     */
    function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (!this.showDebugMessages)
            return;
        console.log(message, optionalParams);
    };
    /**
     * @param {?=} message
     * @param {...?} optionalParams
     * @return {?}
     */
    ViewerComponent.prototype.error = /**
     * @param {?=} message
     * @param {...?} optionalParams
     * @return {?}
     */
    function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (!this.showDebugMessages)
            return;
        console.error(message, optionalParams);
    };
    ViewerComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'adsk-forge-viewer',
                    template: "<div id=\"ng2-adsk-forge-viewer-container\"></div> ",
                    styles: ["@import url('https://developer.api.autodesk.com/modelderivative/v2/viewers/style.min.css?v=6.5.*'); "],
                    changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
                },] },
    ];
    /** @nocollapse */
    ViewerComponent.ctorParameters = function () { return [
        { type: ScriptService, },
    ]; };
    ViewerComponent.propDecorators = {
        "onDocumentChanged": [{ type: _angular_core.Output },],
        "onItemLoaded": [{ type: _angular_core.Output },],
        "onError": [{ type: _angular_core.Output },],
        "onFitToView": [{ type: _angular_core.Output },],
        "onFullscreen": [{ type: _angular_core.Output },],
        "onGeometryLoaded": [{ type: _angular_core.Output },],
        "onHide": [{ type: _angular_core.Output },],
        "onIsolate": [{ type: _angular_core.Output },],
        "onObjectTreeCreated": [{ type: _angular_core.Output },],
        "onObjectTreeUnavailable": [{ type: _angular_core.Output },],
        "onReset": [{ type: _angular_core.Output },],
        "onSelectionChanged": [{ type: _angular_core.Output },],
        "onShow": [{ type: _angular_core.Output },],
        "showDebugMessages": [{ type: _angular_core.Input },],
        "viewerOptions": [{ type: _angular_core.Input },],
    };
    return ViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

var ThumbnailComponent = (function () {
    function ThumbnailComponent(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
    }
    /**
     * @return {?}
     */
    ThumbnailComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.thumbnailOptions) {
            this.setImageSrc(this.thumbnailOptions.defaultImageSrc);
            this.getThumbnail(this.thumbnailOptions.documentId);
        }
    };
    /**
     * @param {?} documentId
     * @return {?}
     */
    ThumbnailComponent.prototype.getThumbnail = /**
     * @param {?} documentId
     * @return {?}
     */
    function (documentId) {
        var _this = this;
        var /** @type {?} */ url = "https://developer.api.autodesk.com/modelderivative/v2/designdata/" + documentId + "/thumbnail";
        var /** @type {?} */ opts = '';
        if (this.thumbnailOptions.width)
            opts += "width=" + this.thumbnailOptions.width + "&";
        if (this.thumbnailOptions.height)
            opts += "height=" + this.thumbnailOptions.height + "&";
        if (opts)
            url += "?" + opts.slice(0, -1);
        this.thumbnailOptions.getAccessToken(this.setAccessToken.bind(this));
        var /** @type {?} */ headers = {
            Authorization: "Bearer " + this.token,
            'Content-Type': 'image/png',
        };
        this.http.get(url, { headers: headers, responseType: 'arraybuffer' })
            .subscribe(function (data) {
            return (data) ? _this.setImageSrc("data:image/png;base64," + _this.toBase64(data))
                : _this.setImageSrc();
        }, function (error) { return _this.setImageSrc(); });
    };
    /**
     * @param {?} accessToken
     * @param {?} expiryTime
     * @return {?}
     */
    ThumbnailComponent.prototype.setAccessToken = /**
     * @param {?} accessToken
     * @param {?} expiryTime
     * @return {?}
     */
    function (accessToken, expiryTime) {
        this.token = accessToken;
        this.expire = expiryTime;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ThumbnailComponent.prototype.toBase64 = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return btoa(String.fromCharCode.apply(String, /** @type {?} */ (new Uint8Array(data))));
    };
    /**
     * @param {?=} src
     * @return {?}
     */
    ThumbnailComponent.prototype.setImageSrc = /**
     * @param {?=} src
     * @return {?}
     */
    function (src) {
        if (src === void 0) { src = ''; }
        var /** @type {?} */ imageSrc = '';
        if (src) {
            imageSrc = src;
        }
        else {
            imageSrc = (this.thumbnailOptions && this.thumbnailOptions.defaultImageSrc) || '';
        }
        this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(imageSrc);
    };
    ThumbnailComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'adsk-forge-thumbnail',
                    template: "<img [src]=\"imageSrc\" /> ",
                },] },
    ];
    /** @nocollapse */
    ThumbnailComponent.ctorParameters = function () { return [
        { type: _angular_common_http.HttpClient, },
        { type: _angular_platformBrowser.DomSanitizer, },
    ]; };
    ThumbnailComponent.propDecorators = {
        "thumbnailOptions": [{ type: _angular_core.Input },],
    };
    return ThumbnailComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ViewerModule = (function () {
    function ViewerModule() {
    }
    ViewerModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [ViewerComponent, ThumbnailComponent],
                    imports: [_angular_common_http.HttpClientModule],
                    exports: [ViewerComponent, ThumbnailComponent],
                    providers: [ScriptService],
                },] },
    ];
    /** @nocollapse */
    ViewerModule.ctorParameters = function () { return []; };
    return ViewerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

exports.BasicExtension = BasicExtension;
exports.ScriptService = ScriptService;
exports.ViewerModule = ViewerModule;
exports.ViewerEventArgs = ViewerEventArgs;
exports.AggregationSelectionChangedEventArgs = AggregationSelectionChangedEventArgs;
exports.AnimationReadyEventArgs = AnimationReadyEventArgs;
exports.CameraChangedEventArgs = CameraChangedEventArgs;
exports.CutplanesChangedEventArgs = CutplanesChangedEventArgs;
exports.EscapeEventArgs = EscapeEventArgs;
exports.ExplodeChangedEventArgs = ExplodeChangedEventArgs;
exports.ExtensionLoadedUnloadedEventArgs = ExtensionLoadedUnloadedEventArgs;
exports.ExtensionLoadedEventArgs = ExtensionLoadedEventArgs;
exports.ExtensionUnloadedEventArgs = ExtensionUnloadedEventArgs;
exports.FinalFrameRenderedChangedEventArgs = FinalFrameRenderedChangedEventArgs;
exports.FitToViewEventArgs = FitToViewEventArgs;
exports.FragmentsLoadedEventArgs = FragmentsLoadedEventArgs;
exports.FullscreenEventArgs = FullscreenEventArgs;
exports.GeometryLoadedEventArgs = GeometryLoadedEventArgs;
exports.HideEventArgs = HideEventArgs;
exports.HyperlinkEventArgs = HyperlinkEventArgs;
exports.IsolateEventArgs = IsolateEventArgs;
exports.LayerVisibilityEventArgs = LayerVisibilityEventArgs;
exports.LoadMissingGeometryEventArgs = LoadMissingGeometryEventArgs;
exports.ModelRootLoadedEventArgs = ModelRootLoadedEventArgs;
exports.ModelUnloadedEventArgs = ModelUnloadedEventArgs;
exports.NavigationModeChangedEventArgs = NavigationModeChangedEventArgs;
exports.ObjectTreeEventArgs = ObjectTreeEventArgs;
exports.ObjectTreeCreatedEventArgs = ObjectTreeCreatedEventArgs;
exports.ObjectTreeUnavailableEventArgs = ObjectTreeUnavailableEventArgs;
exports.PrefEventArgs = PrefEventArgs;
exports.PrefChangedEventArgs = PrefChangedEventArgs;
exports.PrefResetEventArgs = PrefResetEventArgs;
exports.ProgressUpdateEventArgs = ProgressUpdateEventArgs;
exports.RenderOptionChangedEventArgs = RenderOptionChangedEventArgs;
exports.RenderPresentedEventArgs = RenderPresentedEventArgs;
exports.ResetEventArgs = ResetEventArgs;
exports.RestoreDefaultSettingsEventArgs = RestoreDefaultSettingsEventArgs;
exports.SelectionChangedEventArgs = SelectionChangedEventArgs;
exports.ShowEventArgs = ShowEventArgs;
exports.TexturesLoadedEventArgs = TexturesLoadedEventArgs;
exports.ToolChangedEventArgs = ToolChangedEventArgs;
exports.ViewerInitializedEventArgs = ViewerInitializedEventArgs;
exports.ViewerResizeEventArgs = ViewerResizeEventArgs;
exports.ViewerStateRestoredEventArgs = ViewerStateRestoredEventArgs;
exports.ViewerUnInitializedEventArgs = ViewerUnInitializedEventArgs;
exports.Extension = Extension;
exports.ViewerComponent = ViewerComponent;
exports.ThumbnailComponent = ThumbnailComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-adsk-forge-viewer.umd.js.map
