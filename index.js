const express = require('express');

const app = express();



app.get("/",(req,res)=>{
    res.send("hello world");
});
app.post("/post",(req,res)=>{
    res.send("Post method revoked");
});

app.delete("/delete",(req,res)=>{
    res.send("delete method revoked");
});

app.put("/put",(req,res)=>{
    res.send("Put method revoked");
});



app.listen(8888,(err)=>{
    if (err){
        console.log(err);
    }
    console.log("App is running on port 8888");
});