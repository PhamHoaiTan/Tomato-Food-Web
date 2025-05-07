import mongoose from 'mongoose'


export const connectDB = () =>{
    mongoose.connect("mongodb://localhost:27017/food").then(()=>console.log('Connect Success')).catch(error=>console.log(error))
}