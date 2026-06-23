import dotenv from "dotenv";
import path from "path";
import app from "../app";

dotenv.config({path:path.join(process.cwd(), ".env")});

export default {
    port: process.env.PORT || 5000,
    database_url: process.env.DATABASE_URL ,
    bcript_salt_rounds: process.env.BCRYPT_SALT_ROUNDS || 10,
    jwt_acess_token_secret: process.env.JWT_ACCESS_TOKEN_SECRET || "",
    jwt_refresh_token_secret: process.env.JWT_REFRESH_TOKEN_SECRET || "",
    jwt_access_token_expiry: process.env.JWT_ACCESS_TOKEN_EXPIRY || "15m",
    jwt_refresh_token_expiry: process.env.JWT_REFRESH_TOKEN_EXPIRY || "7d",
    app_url: process.env.APP_URL || "http://localhost:5000",
};

