import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const _config = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGO_URI,
    env: process.env.NODE_ENV,
    jwt_secret: process.env.JWT_SECRET
};

export const config = Object.freeze(_config);
