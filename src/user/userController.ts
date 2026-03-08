import type { Request, Response } from "express";
import User from "./userModle.ts";

const registerNewUser = async (req: Request, res: Response) => {
    res.status(201).json({ message: "New User Registerd" });
};

export { registerNewUser };
