import { Segments, Joi, celebrate } from "celebrate";
import { get_message, get_messages, send_message } from "../controllers/message.controller";
import { Router } from "express";
import { accessToken } from "../middleware/access";

const router = Router();

router.get("/", accessToken, get_messages);
router.get("/:id", accessToken, get_message);
router.post(
  "/",
  accessToken,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      sender_phone: Joi.string().required(),
      recipient: Joi.string().required(),
      message: Joi.string().required(),
      type: Joi.string().required(),
      send_at: Joi.date().required(),
      batch_id: Joi.number().required(),
      send_attempt: Joi.number().required(),
      send_time: Joi.string().required(),
      message_reference: Joi.string().allow("", null),
    }),
  }),
  send_message
);

module.exports = router;
