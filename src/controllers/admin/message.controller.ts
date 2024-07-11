import { Request, Response } from "express";
import { CreateMessage, GetMessage, GetMessages } from "../../queries";
import message from "../../models/message";

export const index = async (request: Request, response: Response) => {
  try {
    const messages = await GetMessages({ deletedAt: null });
    return response.json({ status: true, messages }).status(200);
  } catch (error) {
    return response.json({ error }).status(500);
  }
};

export const show = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const message = await GetMessage({ id, deletedAt: null });
    if (!message) return response.json({ status: false, message: "Message not found" }).status(422);
    return response.json({ status: true, message }).status(201);
  } catch (error) {
    return response.json({ error }).status(500);
  }
};

export const store = async (request: Request, response: Response) => {
  const { message } = request.body;
  try {
    const new_message = await CreateMessage(message);
    return response.json({ status: true, message: new_message }).status(201);
  } catch (error) {
    return response.json({ error }).status(500);
  }
};
