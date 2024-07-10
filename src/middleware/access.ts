import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { getSettings } from "../queries";
dotenv.config();

export const accessToken = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const authHeader = request.header("Authorization");
    if (!authHeader) {
      return response.status(401).json({ error: "Authorization header missing" });
    }

    const token = authHeader.replace("Bearer ", "");
    // Further processing with the token...
    const settings = await getSettings();
    const api_key = settings.api_key;

    if (token !== api_key) return response.status(401).json({ error: "invalid api key" });
    next();
  } catch (error) {
    next(error);
  }
};
