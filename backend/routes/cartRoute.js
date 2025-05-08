import express from 'express'

import {addToCart, getCart, removeFormCart} from "../controllers/cartController.js"
import authMiddleware from '../middleware/auth.js'

const cartRoute = express.Router()

cartRoute.post("/add",authMiddleware, addToCart)
cartRoute.post("/remove", authMiddleware, removeFormCart)
cartRoute.post("/list",authMiddleware, getCart)



export default cartRoute