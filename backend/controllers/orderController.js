import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import Stripe from "stripe"


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const placeOrder = async (req, res) => {
  const frontendUrl = "http://localhost:5173";

  try {
    const userId = req.userId;
    const { items, amount, address } = req.body;

    if (!userId || !items || !items.length) {
      return res.status(400).json({ success: false, message: "Invalid order data" });
    }

    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    const line_items = items.map(item => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.name },
        unit_amount: item.price * 100
      },
      quantity: item.quantity
    }));

    line_items.push({
      price_data: {
        currency: "usd",
        product_data: { name: "Delivery Charges" },
        unit_amount: 2 * 100
      },
      quantity: 1
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${frontendUrl}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontendUrl}/verify?success=false&orderId=${newOrder._id}`
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error in payment" });
  }
};

const verify_order = async (req, res) => {
  const {orderId, success} = req.body
  try {
    if(success === 'true'){
      await orderModel.findByIdAndUpdate(orderId, {payment: true})
      res.json({
        success: true,
        message: "Payment Successful"
      })
    }
    else{
      await orderModel.findByIdAndDelete(orderId, {payment: true})
      res.json({
        success: false,
        message: "Payment Not Success"
      })
    }
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Error"
    })
  }
}

const user_orders = async(req, res) => {
  try {
    const orders = await orderModel.find({userId: req.userId}) // req.body.userId
    res.json({
      success: true,
      data: orders
    })

  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Error in getting user orders"
    })

  }
}

export {placeOrder, verify_order, user_orders}