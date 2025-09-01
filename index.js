import express from "express"
import mongoose from "mongoose"
import userRoutes from "./Routes/UserRoutes.js"

const app=express()
const Port=3000

app.use(express.json())//middlewear
userRoutes(app)

mongoose.connect("mongodb+srv://karushnika_db_user:JTLGeI5TmmPU6q9l@cluster0.lcsejwh.mongodb.net/")
.then(()=>{
    console.log("Connected to db SuccessFully!!");
})
.catch((err)=>{
    console.log("Failed to connect to db ",err);
})

app.listen(Port,()=>{
    console.log(`Server is running in port ${Port}`);
})