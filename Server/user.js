const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String,
        age: Number
    }
);
 mongoose.model("users",userSchema)