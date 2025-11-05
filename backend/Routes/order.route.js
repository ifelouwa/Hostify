import express from "express";
import { createOrder, getallOrders, updateOrderStatus } from "../Controllers/order.controller.js";
import { protect, adminOnly } from "../Middlewares/auth.middleware.js";
import { orderValidator } from "../Validators/orderValidator.js";
import { handleValidation } from "../Middlewares/validator.middleware.js";

const router = express.Router();

router.post("/create", protect, orderValidator, handleValidation, createOrder);
router.get("/", getallOrders);
router.patch("/:id", protect, adminOnly, updateOrderStatus);

export default router;