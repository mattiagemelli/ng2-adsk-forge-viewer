import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Extension, ViewerEventArgs } from './extension';
export declare class BasicExtension extends Extension {
    static extensionName: string;
    static debugMessages: boolean;
    private static callback;
    viewerEvents: Observable<ViewerEventArgs>;
    protected eventStreams: Observable<ViewerEventArgs>[];
    protected readonly events: string[];
    static registerExtension(extensionName: string, callback: (ext: BasicExtension) => void): void;
    load(): boolean;
    unload(): boolean;
}
