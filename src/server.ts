import express, { Application, Request, Response, NextFunction, Errback } from "express";
import bodyParser from "body-parser";
// import { auth } from "express-openid-connect";
import db from "./models";
import routes from "./routes";
import dotenv from "dotenv";
import { isCelebrate, errors, celebrate } from "celebrate";
// import config from "./utils/AuthO";
import http from "http";
import { Server } from "socket.io";
import { SetupSocket } from "./utils/websocket";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 7466;
const server = http.createServer(app);
const io = new Server(server);

app.use(bodyParser.json());
app.use("/api/v1", routes);

SetupSocket(io);

app.use(function (request, response, next) {
  // Website you wish to allow to connect
  response.setHeader("Access-Control-Allow-Origin", "*");

  // // Request methods you wish to allow
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

  // // Request headers you wish to allow
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  response.setHeader("Access-Control-Allow-Credentials", "true");
  response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  response.setHeader("Content-Type", "application/json");
  // Pass to next layer of middleware
  next();
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (isCelebrate(err)) return res.status(400).json({ success: false, message: err.message.replace(/["]+/g, "").replace(/(_)/g, " ") });
});

db.sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
  });
});
