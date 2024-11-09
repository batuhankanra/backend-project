import dotenv from 'dotenv'

dotenv.config()
export const config = {
    "PORT":process.env.PORT || 3001,
    "CONNECTION_DB":process.env.DB_URL || null,
    "LOG_LEVE":process.env.LOG_LEVE || "debug"
}