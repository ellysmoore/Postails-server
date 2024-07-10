import { Request, Response, NextFunction } from "express";
import { getMessage, getMessages, getUser, sendMessage } from "../queries";

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
    const message = await getMessage({ id, deletedAt: null });
    if (message == null) return response.json({ message }).status(422);
    return response.json({ message }).status(200);
  } catch (error) {
    return response.json({ error }).status(500);
  }
};

export const send_message = async (request: Request, response: Response, next: NextFunction) => {
  const { sender_phone, recipient, message, type, send_at, batch_id, send_attempt, send_time, message_reference } = request.body;
  try {
    const user = await getUser();
    const send = await sendMessage(user.id, sender_phone, recipient, message, type, send_at, batch_id, send_attempt, send_time, user.fullname, message_reference);
    return response.json({ send }).status(201);
  } catch (error) {
    return response.json({ error }).status(500);
  }
};
