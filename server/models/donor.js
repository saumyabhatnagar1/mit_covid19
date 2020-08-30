const mongoose=require('mongoose');


const DonorSchema=new mongoose.Schema({
    name:String,
    recDate:String,
    recTime:String
})
mongoose.model("don_model",DonorSchema)

