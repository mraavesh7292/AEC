import dotenv from 'dotenv';

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 8080),
  mongoUri: process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/quraniyah',
  jwtSecret: process.env.JWT_SECRET ?? 'replace-me',
  quranApiBaseUrl: process.env.QURAN_API_BASE_URL ?? 'https://api.quran.com/api/v4'
};
