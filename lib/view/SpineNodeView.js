"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
class SpineNodeView {
    constructor() {
        this.screen = new skyengine_1.Fullscreen({
            width: 1000,
            height: 1000,
        });
        new skyengine_1.SpineNode(0, 300, {
            json: "resources/spineboy-pro.json",
            atlas: "resources/spineboy-pro.atlas",
            png: "resources/spineboy-pro.png",
            animation: "run",
        }).appendTo(this.screen.root);
    }
    changeParams(params, uri) { }
    close() {
        this.screen.delete();
    }
}
exports.default = SpineNodeView;
//# sourceMappingURL=SpineNodeView.js.map