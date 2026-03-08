import app from "./src/app.ts";
import connectDatabase from "./src/config/db.ts"
import { config } from "./src/config/config.ts";


const startServer = async () => {
    await connectDatabase()
    const port = Number(config.port);
    app.listen(port, () => {
        console.log(`Server is Running on Port ${port}...`);
    });
};

startServer()