import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import ViewUtil from "./ViewUtil";

export default class Home implements View {

    private container: DomNode;

    constructor() {
        this.container = el(".home-view",
            el("a", "심플 이미지", { click: () => ViewUtil.go("/simpleimage") }),
        ).appendTo(BodyNode);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
