import express from "express";
const userRouter = express.Router();

import { registerNewUser } from "./userController.ts"

userRouter.post("/register", registerNewUser);

export default userRouter;
