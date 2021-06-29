const express = require('express')
const data = require('./food.json');
const app = express();
app.set('view engine','hbs');
app.get('/',(req,res)=>{
    res.render('index.hbs',{item:data})
})
app.listen(5005,()=>{
    console.log("Server is running on port 5005");
})