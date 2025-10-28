import foodModel from "../models/foodModel.js";
import fs from "fs"

// add food item

const addFood = async(req, res) => {
  let image_filename = `${req.file.filename}`

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename
  })
  try {
    await food.save()
    res.json({
      success: true,
      message: "Food Added"
    })
  } catch (error) {
    console.error(`Getting ${error} while adding food`);
    res.json({success: false, message: "Error"})
  }
}

const list_the_foods = async(req, res) => {
  try {
    const foods = await foodModel.find({})
    res.json({
      success: true,
      data: foods,
    })
  } catch (error) {
    console.error(`Getting ${error} while listing the foods`)
    res.json({
      success: false,
      message: "Error"
    })
  }
}

const remove_food = async(req, res) => {
  try {
    const deleteFoodItem = await foodModel.findById(req.body.id)
    fs.unlink(`uploads/${deleteFoodItem.image}`, (err) => {
      if(err) {
        console.error("Failed to remove file from uploads", err)
      }
      else{
        console.log("Imagefile deleted successfully from uploads")
      }
    })

    await foodModel.findByIdAndDelete(req.body.id)
    res.json({
      success: true,
      message: "Food Removed"
    })

  } catch (error) {
    console.error(`Getting ${error} while removing food file`);
    res.json({
      success: false,
      message: "Error"
    })
  }
}

export {addFood, list_the_foods, remove_food}