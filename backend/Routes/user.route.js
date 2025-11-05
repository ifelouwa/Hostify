import express from "express";
import { getAllUsers, getUserById, deleteUser } from "../Controllers/user.controller.js";
import { protect, adminOnly } from "../Middlewares/auth.middleware.js";
import { loginUser, registerUser } from "../Controllers/auth.controller.js";

const router = express.Router();

//Admin: get all users
router.get("/", protect, adminOnly, getAllUsers);

//Logged-in user or admin: get one user
router.get("/:id", protect, getUserById);

//Admin: delete user
router.delete("/:id", protect, adminOnly, deleteUser);

//Auth routes
router.post('/register', registerUser)

router.post('/login', loginUser)

export default router;
