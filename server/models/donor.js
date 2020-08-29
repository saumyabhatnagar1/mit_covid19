const mongoose=require('mongoose');


const DonorSchema=new mongoose.Schema({
    itemName:String,
    price:String,
    quantity:String,
    location:String
})
mongoose.model("don_model",DonorSchema)

