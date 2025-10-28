import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

// app config
const app = express()

const port = 4000

// middlewares
app.use(express.json())
app.use(cors())

// db connection
connectDB()

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads")) // mount the uploads folder using the /images endpoint

app.get("/", (req, res) => {
  res.send("API is working")
})

app.listen(port, () => {
  console.log(`APP is running on ${port}`);
})

