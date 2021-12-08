"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyengine_1 = require("@hanul/skyengine");
const GameNode_1 = __importDefault(require("@hanul/skyengine/lib/gamenode/GameNode"));
const skynode_1 = require("@hanul/skynode");
class DomNodeView {
    constructor() {
        this.screen = new skyengine_1.Fullscreen({
            width: 1000,
            height: 1000,
        });
        const node = new GameNode_1.default(0, 0).appendTo(this.screen.root);
        node.dom = (0, skynode_1.el)(".test", "This is test.");
    }
    changeParams(params, uri) { }
    close() {
        this.screen.delete();
    }
}
exports.default = DomNodeView;
//# sourceMappingURL=DomNodeView.js.map