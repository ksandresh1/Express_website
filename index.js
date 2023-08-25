const express = require('express');

const app = express();



app.get("/",(req,res)=>{
    res.send("hello world");
});


app.listen(8888,(err)=>{
    if (err){
        console.log(err);
    }
    console.log("App is running on port 8888");
});