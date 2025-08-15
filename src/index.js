import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./configs/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import noteRoutes from "./routes/noteRoutes.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5001;

//middlewares
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

// routes
app.use("/api/notes", noteRoutes);

//mongodb connections
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
});
