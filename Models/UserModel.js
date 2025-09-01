import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({ //blueprint for documents
    name:{
        type:String,
        required:true,   // must provide
        trim:true   //remove white spaces
    },
    age:{
        type:Number,
        min:1,
        max:100
    },
    email:{
        type:String,
        required:true,
        unique:true   // no two users with same email
    }
})

const User=mongoose.model("User",UserSchema)//creating the model/collection

export default User