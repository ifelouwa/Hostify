import { body } from "express-validator";

export const orderValidator = [
  body("items")
    .isArray({ min: 1 })
    .withMessage("Items must be a non-empty array"),
  body("items.*.name")
    .notEmpty()
    .withMessage("Each item must have a name"),
  body("items.*.quantity")
    .isInt({ min: 1 })
    .withMessage("Quantity must be at least 1"),
  body("items.*.price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be greater than 0"),
  body("totalPrice")
    .isFloat({ gt: 0 })
    .withMessage("Total price must be a positive number"),
];
