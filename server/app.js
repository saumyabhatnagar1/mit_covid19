const express=require('express');
const app=express()
const bodyParser=require('body-parser');
const mongoose=require('mongoose')
require('./models/donor')
const password='@N6qn9quy*emJNE'
const MongoUri='mongodb+srv://covid_admin:@N6qn9quy*emJNE@cluster0.34hkp.mongodb.net/<dbname>?retryWrites=true&w=majority'

app.use(bodyParser.json())
const Donor=mongoose.model('don_model')
mongoose.connect(MongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log('connected')
})
mongoose.connection.on("error",(err)=>{
    console.log(err)
})


app.get('/',(req,res)=>{
    res.send('working')
})
app.post('/send',(req,res)=>{
    console.log(body)
    res.send('posted')
})


app.listen(3000,()=>{

    console.log('running')
})