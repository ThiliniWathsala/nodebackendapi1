
const express=require('express');
const app=express();

app.get('/hello',(req,res)=>{
    res.send("hello world");
});

app.listen(3000,()=>console.log("port is connected"));   // set the port number
