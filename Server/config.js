import dotenv from 'dotenv';
dotenv.config();

export const MONGODB= process.env.PASSWORD

export const PORT = process.env.PORT || 3000;