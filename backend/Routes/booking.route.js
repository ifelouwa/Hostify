import express from "express";
import {
  createBooking,
  cancelBooking,
  updateBooking,
  deleteBooking,
  getAllBookings,
  getOneBooking
} from "../Controllers/booking.controller.js";
import {  bookingValidator,  } from "../Middlewares/validator.middleware.js";
import { protect, adminOnly } from "../Middlewares/auth.middleware.js";

const router = express.Router();

// Booking registration
router.post("/book",   protect, bookingValidator,   createBooking);


// Authenticated booking routes
router.get("/viewbooking/:id",protect, getOneBooking);
router.put("/update/:id",protect, updateBooking);
router.patch('/cancel/:id',protect, cancelBooking);
router.delete("/delete/:id",protect, deleteBooking);

// Admin Routes
router.get("/all", protect, adminOnly, getAllBookings);

export default router;