import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js"
import userRoute from "./routes/user.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config({});
//call database connection
connectDB();
const app = express();

const PORT= process.env.PORT || 3000;
//default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
//apis
app.use("/api/v1/user",userRoute);

// "http://localhost:8080/api/vi/user/register"
app.get("/home",(_,res)=>{
    res.status(200).json({
        success:true,
        message:"hello i am coming from backend"
    })
})
app.listen(PORT,()=>{
    console.log(`Sever is Listening at port ${PORT}`);
    
})