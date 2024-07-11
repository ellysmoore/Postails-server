import DB from "../models";
const { Message } = DB;

export const sendMessage = async (user_id: number, sender_phone: string, recipient: [], message: string, type: string, send_at: Date, batch_id: number, send_attempt: number, send_time: Date, createdBy: string, message_reference: string | null = null, status: string = "sent") => {
  return await Message.create({
    user_id,
    sender_phone,
    recipient,
    message,
    type,
    send_at,
    batch_id,
    send_attempt,
    send_time,
    createdBy,
    message_reference,
    status,
  });
};

export const getMessages = async (query = {}) => {
  return await Message.findAll({ where: query });
};

export const getMessage = async (query = {}) => {
  return await Message.findOne({ where: query });
};
