import { Server } from "socket.io";
import { IMessage } from "../interfaces";

export let io: Server;

export const SetupSocket = (server: Server) => {
  io = server;
  io.on("connection", (socket) => {
    console.log("A user is connected");
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};

export const emitNewMessage = (message: IMessage) => {
  if (io) {
    io.emit("new-message", message);
  }
};
