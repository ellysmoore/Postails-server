import DB from "../models";
const { Message } = DB;

export const sendMessage = async (query = {}) => {
  return await Message.create(query);
};

export const getMessages = async (query = {}) => {
  return await Message.findAll({ where: query });
};

export const getMessage = async (query = {}) => {
  return await Message.findOne({ where: query });
};
