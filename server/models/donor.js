const mongoose=require('mongoose');


const DonorSchema=new mongoose.Schema({
    name:String,
    itemName:String,
    price:String,
    quantity:String,
    location:String,
    avail:String
})
mongoose.model("don_model",DonorSchema)

