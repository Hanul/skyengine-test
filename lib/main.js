"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skyrouter_1 = require("skyrouter");
const DomNodeView_1 = __importDefault(require("./view/DomNodeView"));
const Home_1 = __importDefault(require("./view/Home"));
const SimpleImage_1 = __importDefault(require("./view/SimpleImage"));
const SpineNodeView_1 = __importDefault(require("./view/SpineNodeView"));
skyrouter_1.SkyRouter.route("", Home_1.default);
skyrouter_1.SkyRouter.route("simpleimage", SimpleImage_1.default);
skyrouter_1.SkyRouter.route("spinenode", SpineNodeView_1.default);
skyrouter_1.SkyRouter.route("domnode", DomNodeView_1.default);
if (sessionStorage.__spa_path) {
    skyrouter_1.SkyRouter.go(sessionStorage.__spa_path);
    sessionStorage.removeItem("__spa_path");
}
//# sourceMappingURL=main.js.map