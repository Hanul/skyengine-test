import { SkyRouter } from "skyrouter";
import Home from "./view/Home";
import SimpleImage from "./view/SimpleImage";

SkyRouter.route("", Home);
SkyRouter.route("simpleimage", SimpleImage);

if (sessionStorage.__spa_path) {
    SkyRouter.go(sessionStorage.__spa_path);
    sessionStorage.removeItem("__spa_path");
}
