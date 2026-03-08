import express from "express";
import { globalErrorHandler } from "./middlewares/globalErrorHandler.ts";

const app = express();
// Middlewares

//Routes [ import ]
import userRouter from "./user/userRoute.ts";

// Routes [ use ]
app.use("/api/users", userRouter);



app.use(globalErrorHandler);
export default app;
