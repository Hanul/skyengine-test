import { Fullscreen, SpineNode } from "@hanul/skyengine";
import { View, ViewParams } from "skyrouter";

export default class SpineNodeView implements View {

    private screen: Fullscreen;

    constructor() {

        this.screen = new Fullscreen({
            width: 1000,
            height: 1000,
        });

        new SpineNode(0, 300, {
            json: "resources/spineboy-pro.json",
            atlas: "resources/spineboy-pro.atlas",
            png: "resources/spineboy-pro.png",
            animation: "run",
        }).appendTo(this.screen.root);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.screen.delete();
    }
}
