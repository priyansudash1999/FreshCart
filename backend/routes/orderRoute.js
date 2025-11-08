import express from "express"
import { placeOrder, user_orders, verify_order } from "../controllers/orderController.js"
import authMiddleware from "../middlewares/auth.js"

const orderRouter = express.Router()


orderRouter.post("/place", authMiddleware, placeOrder)
orderRouter.post("/verify", verify_order)
orderRouter.post("/userorder", authMiddleware, user_orders)


export default orderRouter