import { Router, Request, Response } from "express";
import fs from "fs";
import path from "path";

const router = Router();
const routes = fs.readdirSync(__dirname).filter((file) => !["index.ts", ".DS_Store"].includes(file));

router.get("/health-check", (request: Request, response: Response) => {
  response.json({ message: "Health Check Passed" });
});

routes.forEach((routefile) => router.use(`/${path.parse(routefile).name}`, require(`./${routefile}`)));

export default router;
