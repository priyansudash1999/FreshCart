import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


// Login User
const loginUser = async(req, res) => {
  
}

const createToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET)
}

// Register user
const registerUser = async(req, res) => {
  const {name, email, password} = req.body
  try {
    //  Check email exists or not
    const checkUser = await userModel.findOne({email})
    if(checkUser){
      return res.json({
        success: false,
        message: "User Already Exists in our Database"
      })
    }

    // validate email and password
    if(!validator.isEmail(email)){
      return res.json({
        success: false,
        message: "Please Enter a valid email"
      })
    }
    if(password.length < 8){
      return res.json({
        success: false,
        message: "Password is more or equal than 8 characters"
      })
    }
    
    // Hash the password
    const salt = await bcrypt.genSalt(8)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword
    })

    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({
      success: true,
      token
    })


  } catch (error) {
    console.error(error);
    res.json({success: false, message: error})
  }
}

// Export the functions

export {loginUser, registerUser}