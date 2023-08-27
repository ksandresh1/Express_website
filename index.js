const express = require('express');
const indexRouter = require('./routes');

const app = express();

//Setting up the ejs 
app.set('view engine', "ejs");
app.set('views', "./views");

//setting up static file 
app.use(express.static("public"));

//activating js for the postman to use in body of the res
app.use(express.json());

// setting up routing
app.use("/",indexRouter);



app.listen(8888,(err)=>{
    if (err){
        console.log(err);
    }
    console.log("App is running on port 8888");
});