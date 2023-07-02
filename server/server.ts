import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import fileRoute from './routes/files';
import { v2 as cloudinary } from 'cloudinary';
const app = express();
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_API_CLOUD,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})
connectDB();
const port =Number (process.env.PORT);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/files", fileRoute);
app.listen(port,()=>console.log(`Server is listening on PORT ${port}`));