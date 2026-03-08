import express, {
    type NextFunction,
    type Request,
    type Response,
} from "express";
import type { HttpError } from "http-errors";
import { config } from "./config/config.ts";
import createHttpError from "http-errors";

const app = express();

app.get("/", (req, res, next) => {
    const error = createHttpError(400, "Test Error");
    throw error
});

// Global Error Handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        message: err.message,
        errorStack: config.env === "development" ? err.stack : {},
    });
});
export default app;
