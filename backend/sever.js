import express from 'express'
import foodRoute from './routes/foodRoute.js';
import { connectDB } from './config/db.js';
import cors from "cors";
import userRoute from './routes/userRoute.js';
import 'dotenv/config'
import cartRoute from './routes/cartRoute.js';
import authMiddleware from './middleware/auth.js';
import orderRoute from './routes/orderRoute.js';
const app = express();

const PORT = 4000;

app.use("/images", express.static("uploads"))
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())
connectDB()
app.use("/api/food", foodRoute)
app.use("/api/user", userRoute)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRoute)




app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})