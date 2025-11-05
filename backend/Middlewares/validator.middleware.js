import { body, validationResult } from 'express-validator';

export const bookingValidator = [
  body("customerName").notEmpty().withMessage("Customer name required"),
  body("phoneNum").notEmpty().withMessage("Phone number required"),
  body("email").isEmail().withMessage("Valid email required"),
  body("space").isIn(["VIP", "Regular", "Outdoor"]).withMessage("Invalid space"),
  body("date").notEmpty().withMessage("Date required"),
  body("time").notEmpty().withMessage("Time required"),
  body("people").isInt({ min: 1 }).withMessage("People must be >= 1"),
];


export const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array().map((err) => err.msg),
    });
  }
  next();
};




