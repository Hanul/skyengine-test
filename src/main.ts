import { SkyRouter } from "skyrouter";
import DomNodeView from "./view/DomNodeView";
import Home from "./view/Home";
import SimpleImage from "./view/SimpleImage";
import SpineNodeView from "./view/SpineNodeView";

SkyRouter.route("", Home);
SkyRouter.route("simpleimage", SimpleImage);
SkyRouter.route("spinenode", SpineNodeView);
SkyRouter.route("domnode", DomNodeView);

if (sessionStorage.__spa_path) {
    SkyRouter.go(sessionStorage.__spa_path);
    sessionStorage.removeItem("__spa_path");
}
