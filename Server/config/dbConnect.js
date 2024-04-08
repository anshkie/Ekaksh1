const mongoose=require("mongoose")
const mongodb=require("mongodb")
const dbConnet=async()=>{
    try{
        await mongoose.connect("mongodb+srv://Ansh:swatigupta02@cluster0.zt0cqn4.mongodb.net/?retryWrites=true&w=majority")
        console.log("connected")
    }catch(error){
        console.log(error)
    }
}
dbConnet()