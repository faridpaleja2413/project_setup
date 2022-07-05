import { Application } from "express";
// import { API_Version } from '@constants/common';
import { useExpressServer } from "routing-controllers";
import UserController from "./api/user/user.controller";
import UserAuthController from "./api/userAuth/userAuth.controller";

const basePath = "/api/v1";

function initRoute(app: Application) {
  useExpressServer(app, {
    controllers: [UserController, UserAuthController], // we specify controllers we want to use
    defaultErrorHandler: true,
    routePrefix: basePath,
  });
}

export default initRoute;
