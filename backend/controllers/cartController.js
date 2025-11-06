import userModel from "../models/userModel.js"


const addToCart = async(req, res) => {
  try {
    const userId = req.userId;
    let userData = await userModel.findById(userId)
    let cartData = await userData.cartData
    if(!cartData[req.body.itemId]){
      cartData[req.body.itemId] = 1
    }
    else{
      cartData[req.body.itemId] += 1
    }
    await userModel.findByIdAndUpdate(req.body.userId, {cartData})
    res.json({
      success: true,
      message: "Added To Cart"
    })
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Error"
    })
  }
}

const removeFromCart = async(req, res) => {
  try {
    const userId = req.userId;
    let userData = await userModel.findById(userId)
    let cartData = await userData.cartData
    if(cartData[req.body.itemId] > 0){
      cartData[req.body.itemId] -= 1
    }
    await userModel.findByIdAndUpdate(req.body.userId, {cartData})
    res.json({
      success: true,
      message: "Removed From Cart"
    })
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Error"
    })
  }
}

const getCartItems = async (req, res) => {
  try {
    const userId = req.userId;
    // console.log(userId);
    
    let userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Error" });
  }
};

export {addToCart, removeFromCart, getCartItems}