import { Request, Response, NextFunction } from "express";
import { getMessage, getMessages, getUser, sendMessage } from "../queries";
import { ISendMessage } from "../interfaces";

export const get_messages = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const messages = await getMessages({ user_id: 1, deletedAt: null });
    return response.json({ data: messages }).status(200);
  } catch (error) {
    return response.json({ error }).status(500);
  }
};

export const get_message = async (request: Request, response: Response, next: NextFunction) => {
  const { id } = request.params;
  try {
    const message = await getMessage({ id, user_id: 1, deletedAt: null });
    if (message == null) return response.json({ message }).status(422);
    return response.json({ message }).status(200);
  } catch (error) {
    return response.json({ error }).status(500);
  }
};

export const send_message = async (request: Request, response: Response, next: NextFunction) => {
  const { messages } = request.body;
  try {
    const user = await getUser();
    const promises = messages.map((message: ISendMessage) => {
      return sendMessage({
        user_id: user.id,
        sender_phone: message.sender_phone,
        recipient: message.recipient,
        message: message.message,
        type: message.type,
        send_at: message.send_at,
        batch_id: message.batch_id,
        send_attempt: message.send_attempt,
        send_time: message.send_time,
        createdBy: user.fullname,
        message_reference: message.message_reference,
        status: "sent",
      });
    });
    await Promise.all(promises);
    return response.json({ status: true, message: "Message sent successfully" }).status(201);
  } catch (error) {
    console.log("====================================");
    console.log({ error });
    console.log("====================================");
    return response.json({ error }).status(500);
  }
};
