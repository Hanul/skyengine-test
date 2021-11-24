"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
class SimpleImage {
    constructor() {
        this.screen = new skyengine_1.Fullscreen({
            width: 1000,
            height: 1000,
        });
        new skyengine_1.Image(0, 0, "/resources/hello.png").appendTo(this.screen.root);
    }
    changeParams(params, uri) { }
    close() {
        this.screen.delete();
    }
}
exports.default = SimpleImage;
//# sourceMappingURL=SimpleImage.js.map