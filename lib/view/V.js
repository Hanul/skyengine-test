"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
class SpineNode {
    constructor() {
        this.screen = new skyengine_1.Fullscreen({
            width: 1000,
            height: 1000,
        });
        new SpineNode({
            json: "resources/spine.json",
            atlas: "resources/spine.atlas",
            png: "resources/spine.png",
            animation: "idle",
            scale: 0.2,
        }).appendTo(this.screen.root);
    }
    changeParams(params, uri) { }
    close() {
        this.screen.delete();
    }
}
exports.default = SpineNode;
//# sourceMappingURL=V.js.map