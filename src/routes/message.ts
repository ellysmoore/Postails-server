import { Segments, Joi, celebrate } from "celebrate";
import { get_message, get_messages, send_message } from "../controllers/message.controller";
import { Router, Request, Response } from "express";
import { accessToken } from "../middleware/access";

const router = Router();

router.get("/health-check", (request: Request, response: Response) => {
  response.json({ message: "Health Check Passed" });
});

const messageSchema = Joi.object().keys({
  sender_phone: Joi.string().required(),
  recipient: Joi.string().required(),
  message: Joi.string().required(),
  type: Joi.string().required(),
  send_at: Joi.date().required(),
  batch_id: Joi.number().allow("", null),
  send_attempt: Joi.number().required(),
  send_time: Joi.string().required(),
  message_reference: Joi.string().allow("", null),
  status: Joi.string().required(),
});

router.get("/", accessToken, get_messages);
router.get("/:id", accessToken, get_message);
router.post(
  "/",
  accessToken,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      messages: Joi.array().items(messageSchema),
    }),
  }),
  send_message
);

export default router;
