"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
class SimpleImage {
    constructor() {
        this.screen = new skyengine_1.Fullscreen({
            width: 100,
            height: 100,
        });
    }
    changeParams(params, uri) { }
    close() {
        this.screen.delete();
    }
}
exports.default = SimpleImage;
//# sourceMappingURL=SimpleImage.js.map