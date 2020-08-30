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
app.use(bodyParser.json())


app.get('/fetchAll',(req,res)=>{
    Donor.find({}).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})
app.post('/send-data',(req,res)=>{
    //console.log(req.body)
    const donor=new Donor({
        name:req.body.name,
        recDate:req.body.recDate,
        recTime:req.body.recTime
    })
    donor.save().then(data=>{res.send(data)}).catch((err)=>{
        console.log(err)
    })  
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
        name:req.body.name,
        recDate:req.body.recdate,
        recTime:req.body.recTime
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