import express from "express";
import { createFeedback, getAllFeedback } from "../Controllers/feedback.controller.js";
import { protect, adminOnly } from "../Middlewares/auth.middleware.js";
import { feedbackValidator } from "../Validators/feedbackValidator.js";
import { handleValidation } from "../Middlewares/validator.middleware.js";

const router = express.Router();

router.post("/post", protect, feedbackValidator, handleValidation, createFeedback);
router.get("/", protect, adminOnly, getAllFeedback);

export default router;

