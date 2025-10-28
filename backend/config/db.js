import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const MONGO_URL = process.env.MONGODB_URL



export const connectDB = async () => {
  await mongoose.connect(MONGO_URL).then(() => console.log("db connected")
  )
}