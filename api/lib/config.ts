import dotenv from "dotenv";

dotenv.config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.API_PORT || '3001',
    host: process.env.API_host || 'localhost',
	cors: process.env.CORS_URL || '*'
}

export default config