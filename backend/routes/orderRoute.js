import express from 'express'
import authMiddleware from '../middleware/auth.js'
import placeOrder from '../controllers/orderController.js'


const oderRoute = express.Router()

oderRoute.post("/place",authMiddleware,placeOrder)



export default oderRoute