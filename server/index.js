import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js"
dotenv.config({});
connectDB();
const app = express();

const PORT= process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Sever is Listening at port ${PORT}`);
    
})