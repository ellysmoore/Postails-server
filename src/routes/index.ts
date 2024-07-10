import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();
const routes = fs.readdirSync(__dirname).filter((file) => !["index.ts", ".DS_Store"].includes(file));

router.get("/health-check", (request: Request, response: Response) => {
  response.json({ message: "Health Check Passed" });
});

routes.forEach((routefile) => {
  const routePath = `./${routefile}`;
  const route = require(routePath);

  // Check if the route has a default export (ESM) or is directly a function (CommonJS)
  const routeMiddleware = route.default || route;

  if (typeof routeMiddleware === "function" || routeMiddleware instanceof Router) {
    router.use(`/${path.parse(routefile).name}`, routeMiddleware);
  } else {
    console.error(`The route file ${routefile} does not export a valid router.`);
  }
});

export default router;
