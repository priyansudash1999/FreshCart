import express from "express"
import { addFood, list_the_foods, remove_food } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router()

// Store of Images
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`)
  }
})

const upload = multer({
  storage: storage
})

foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", list_the_foods)
foodRouter.post("/remove", remove_food)

export default foodRouter