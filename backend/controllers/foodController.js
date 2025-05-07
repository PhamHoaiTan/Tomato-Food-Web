import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add a Food
const addFood = async (req, res) => {
  let image_name = req.file.filename;
  const newFood = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_name,
  });

  try {
    await newFood.save();
    res.json({ success: true, message: "Add new food success" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
// show list food
const listFood = async (req, res) => {
  const foods = await foodModel.find();
  res.json({ success:true, data: foods });
};

// delete
const removeFood = async (req, res) => {
  const foodId = req.body.id;
  try {
    const food = await foodModel.findById(foodId);
    fs.unlink(`uploads/${food.image}`,()=>{});

    await foodModel.findByIdAndDelete(foodId);
    res.json({success:true, message:"Food Removed"})
  } catch (error) {
    console.log(error)
    res.json({success:false, message:"Error"})
  }
};

export { addFood, listFood, removeFood };
