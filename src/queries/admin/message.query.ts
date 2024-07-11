import DB from "../../models";
const { BaseMessage } = DB;
import { emitNewMessage } from "../../utils/websocket";

export const CreateMessage = async (message: string) => {
  const new_message = await BaseMessage.create({
    message,
  });
  emitNewMessage(new_message);
  return new_message;
};

export const GetMessages = async (query = {}) => {
  return await BaseMessage.findAll({ where: query });
};

export const GetMessage = async (query = {}) => {
  return await BaseMessage.findOne({ where: query });
};
