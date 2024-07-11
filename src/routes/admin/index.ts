import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();
const routes = fs.readdirSync(__dirname).filter((file) => !["index.ts", ".DS_Store"].includes(file));

routes.forEach((routefile) => {
  const routePath = path.join(__dirname, routefile);
  const route = require(routePath);

  const routeMiddleware = route.default || route;

  if (typeof routeMiddleware === "function" || routeMiddleware instanceof Router) {
    router.use(`/${path.parse(routefile).name}`, routeMiddleware);
  } else {
  }
});

export default router;
