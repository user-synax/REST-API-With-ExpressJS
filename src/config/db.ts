import mongoose from "mongoose";
import { config } from "./config.ts";

const connectDatabase = async () => {
    try {
        if (!config.mongoURI) {
            throw new Error("mongoURI is undefined");
        }
        mongoose.connection.on("connected", () => {
            console.log("Database Connection Successful...");
        });
        mongoose.connection.on("error", (err) => {
            console.log("Database Connection Failed...");
            console.log(err);
        });
        await mongoose.connect(config.mongoURI as string);
    } catch (error) {
        console.log("Database Connection Failed...");
        console.log(error);
        process.exit(1);
    }
};

export default connectDatabase;
