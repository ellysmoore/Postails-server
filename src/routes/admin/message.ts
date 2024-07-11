import { Segments, Joi, celebrate } from "celebrate";
import { index, show, store } from "../../controllers/admin/message.controller";
import { Router, Request, Response } from "express";
import { accessToken } from "../../middleware/access";

const router = Router();

router.get("/health-check", (request: Request, response: Response) => {
  response.json({ message: "Health Check Passed" });
});

router.get("/", accessToken, index);
router.get("/:id", accessToken, show);
router.post(
  "/",
  accessToken,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      message: Joi.string().required(),
    }),
  }),
  store
);

export default router;
