import { Fullscreen } from "@hanul/skyengine";
import GameNode from "@hanul/skyengine/lib/gamenode/GameNode";
import { el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class DomNodeView implements View {

    private screen: Fullscreen;

    constructor() {

        this.screen = new Fullscreen({
            width: 1000,
            height: 1000,
        });

        const node = new GameNode(0, 0).appendTo(this.screen.root);
        node.dom = el(".test", "This is test.");
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.screen.delete();
    }
}
