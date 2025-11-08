import express from "express"
import { list_orders, placeOrder, update_delivery_status, user_orders, verify_order } from "../controllers/orderController.js"
import authMiddleware from "../middlewares/auth.js"

const orderRouter = express.Router()


orderRouter.post("/place", authMiddleware, placeOrder)
orderRouter.post("/verify", verify_order)
orderRouter.post("/userorder", authMiddleware, user_orders)
orderRouter.get("/list", list_orders)
orderRouter.post("/status", update_delivery_status)


export default orderRouter