import { Fullscreen } from "@hanul/skyengine";
import { View, ViewParams } from "skyrouter";

export default class SimpleImage implements View {

    private screen: Fullscreen;

    constructor() {
        this.screen = new Fullscreen({
            width: 100,
            height: 100,
        });
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.screen.delete();
    }
}
