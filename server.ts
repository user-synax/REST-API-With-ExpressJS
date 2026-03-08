import app from "./src/app.ts";
import { config } from "./src/config/config.ts";


const startServer = () => {
    const port = Number(config.port);
    app.listen(port, () => {
        console.log(`Server is Running on Port ${port}...`);
    });
};

startServer()