import { accessToken } from "../middleware/access";
import { Segments, Joi, celebrate } from "celebrate";
import { create_user } from "../controllers/user.controller";
import { Router } from "express";

const router = Router();

router.post(
  "/",
  accessToken,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      fullname: Joi.string().required(),
      email: Joi.string().email().required(),
    }),
  }),
  create_user
);

module.exports = router;
