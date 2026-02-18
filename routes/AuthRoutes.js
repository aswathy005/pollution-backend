import express from "express";
import { addUser, login } from "../controller/AuthController.js";

const router = express.Router();

// register
router.post("/register", addUser);

// login
router.post("/login", login);

export default router;
