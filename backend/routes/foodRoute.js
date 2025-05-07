import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from 'multer'
const foodRoute = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb)=> cb(null,`${Date.now()}${file.originalname}`)
})

const update = multer({storage:storage});
const updateId = multer();
foodRoute.post("/add",update.single("image") ,addFood);
foodRoute.get("/list", listFood);
foodRoute.post("/remove",updateId.none(), removeFood);


export default foodRoute;
