import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import User from "./userModle.ts";
// @ts-ignore
import bcrypt from "bcrypt";

const registerNewUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { name, email, password } = req.body;
    // Validation
    if (!name || !email || !password) {
        const error = createHttpError(400, "All fields are required");
        return next(error);
    }

    // Calling Database and checking if user already registered
    const isUserAlreadyRegistered = await User.findOne({ email });
    if (isUserAlreadyRegistered) {
        const error = createHttpError(400, "User already registered");
        return next(error);
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        res.status(201).json({
            message: "New User Registerd",
            user: { name, email },
        });
    } catch (error) {
        return next(error);
    }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            const error = createHttpError(404, "User not found");
            return next(error);
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            const error = createHttpError(401, "Invalid password");
            return next(error);
        }
        user.password = "";
        res.status(200).json({
            message: "User logged in",
            user: { name: user.name, email: user.email },
        });
    } catch (error) {
        return next(error);
    }
};

export { registerNewUser, loginUser };
