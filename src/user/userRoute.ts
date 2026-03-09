import express from "express";
const userRouter = express.Router();

import { loginUser, registerNewUser } from "./userController.ts";

userRouter.post("/register", registerNewUser);
userRouter.post("/login", loginUser);

export default userRouter;
