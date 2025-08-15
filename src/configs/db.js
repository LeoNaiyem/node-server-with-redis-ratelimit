import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully!");
    } catch (err) {
        console.error("Error connecting mongoDB",err);
        process.exit(1); //exit with failure
    }
}