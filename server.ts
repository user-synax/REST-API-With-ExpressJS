import app from "./src/app.ts";
import connectDatabase from "./src/config/db.ts"
import { config } from "./src/config/config.ts";

await connectDatabase()

const startServer = () => {
    const port = Number(config.port);
    app.listen(port, () => {
        console.log(`Server is Running on Port ${port}...`);
    });
};

startServer()