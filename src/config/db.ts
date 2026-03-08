import mongoose from "mongoose";
import { config } from "./config.ts";

const connectDatabase = async () => {
    try {
        if (!config.mongoURI) {
            throw new Error("mongoURI is undefined");
        }
        await mongoose.connect(config.mongoURI as string);
        console.log("Database Connection Successful...");
    } catch (error) {
        console.log("Database Connection Failed...");
        console.log(error);
        process.exit(1);
    }
};

export default connectDatabase;
