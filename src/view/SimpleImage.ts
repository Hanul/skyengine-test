import { Fullscreen, Image } from "@hanul/skyengine";
import { View, ViewParams } from "skyrouter";

export default class SimpleImage implements View {

    private screen: Fullscreen;

    constructor() {
        this.screen = new Fullscreen({
            width: 1000,
            height: 1000,
        });
        new Image(0, 0, "/resources/hello.png").appendTo(this.screen.root);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.screen.delete();
    }
}
