import userModel from "../models/userModel.js"

const addToCart = async (req, res) => {
  try {
    const userId = req.userId; 
    let userData = await userModel.findById(userId);
    let cartData = userData.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData }); 
    res.json({
      success: true,
      message: "Added To Cart",
    });
  } catch (error) {
    console.error("AddToCart Error:", error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const userId = req.userId; 
    let userData = await userModel.findById(userId);
    let cartData = userData.cartData;

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData }); 

    res.json({
      success: true,
      message: "Removed From Cart",
    });
  } catch (error) {
    console.error("RemoveFromCart Error:", error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

const getCartItems = async (req, res) => {
  try {
    const userId = req.userId; 
    let userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    res.json({
      success: true,
      cartData,
    });
  } catch (error) {
    console.error("GetCartItems Error:", error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

export { addToCart, removeFromCart, getCartItems };
