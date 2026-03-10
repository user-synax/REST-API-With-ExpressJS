import mongoose from "mongoose";
import type { UserTypes } from "./userTypes.ts";

const userSchema = new mongoose.Schema<UserTypes>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
    },
    { timestamps: true },
);

const User = mongoose.model<UserTypes>("User", userSchema);

export default User;
