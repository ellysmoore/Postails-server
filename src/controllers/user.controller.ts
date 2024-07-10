import { Request, Response, NextFunction } from "express";
import { createUser } from "../queries";

export const create_user = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { email, fullname } = request.body;
    const user = await createUser(email, fullname);
    return response.json({ user }).status(201);
  } catch (error) {
    return response.json({ error }).status(400);
  }
};
