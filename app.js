const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
//Import Routes
const postsRoute=require('./routes/posts');
app.use('/posts',postsRoute);


const Port=process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send('<h1>Hello this is Home</h1>')
})
//connect to db
mongoose.connect('mongodb+srv://rachitha:rachirgamage22@rest.ficvr.mongodb.net/rachitha?retryWrites=true&w=majority', { useUnifiedTopology: true,useNewUrlParser: true },()=>{
    console.log('connected to database');
})

app.listen(Port,()=>{console.log(`Server started in ${Port}`)});