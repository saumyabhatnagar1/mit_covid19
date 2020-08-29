const express=require('express');
const app=express()
const bodyParser=require('body-parser');
const mongoose=require('mongoose')
require('./models/donor')
const password='@N6qn9quy*emJNE'
const MongoUri='mongodb+srv://covid_admin:@N6qn9quy*emJNE@cluster0.34hkp.mongodb.net/<dbname>?retryWrites=true&w=majority'

const Donor=mongoose.model('don_model')
mongoose.connect(MongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})

mongoose.connection.on("connected",()=>{
    console.log('connected')
})
mongoose.connection.on("error",(err)=>{
    console.log(err)
})


app.get('/fetchAll',(req,res)=>{
    Donor.find({}).then((data)=>{
        console.log(data)
        res.send('fetched')
    }).catch((err)=>{
        console.log(err)
    })
})
app.post('/send-data',(req,res)=>{
    //console.log(req.body)
    const donor=new Donor({
        itemName:req.body.itemName,
        quantity:req.body.quantity,
        price:req.body.quantity,
        location:req.body.location,
        name:req.body.name
    })
    donor.save().then(data=>{console.log(data)}).catch((err)=>{
        console.log(err)
    })  
    res.send('posted')
})
app.delete('/delete',(req,res)=>{
    Donor.findByIdAndRemove(req.body.id).then((data)=>{
        console.log(data)
        res.send('deleted')
    }).catch((err)=>{
        console.log(err)
    })
})

app.patch('/update',(req,res)=>{
    Donor.findByIdAndUpdate(req.body.id,{
        itemName:req.body.itemName,
        quantity:req.body.quantity,
        price:req.body.quantity,
        location:req.body.location,
        name:req.body.name
    }).then((data)=>{
        console.log(data)
        res.send('updated')
    }).catch((err)=>{
        console.log(err)
    })

})


app.listen(3000,()=>{

    console.log('running')
})