import DB from "../../models";
const { BaseMessage } = DB;

export const CreateMessage = async (message: string) => {
  return await BaseMessage.create({
    message,
  });
};

export const GetMessages = async (query = {}) => {
  return await BaseMessage.findAll({ where: query });
};

export const GetMessage = async (query = {}) => {
  return await BaseMessage.findOne({ where: query });
};
