"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Home {
    constructor() {
        this.container = (0, skynode_1.el)(".home-view", (0, skynode_1.el)("a", "심플 이미지", { click: () => ViewUtil_1.default.go("/simpleimage") })).appendTo(skynode_1.BodyNode);
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map