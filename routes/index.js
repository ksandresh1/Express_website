const { render } = require('ejs');
const express = require ('express')
const router = express.Router();

// this is how we create the dynamic route
router.get("/:name",(req,res)=>{
    const {name} = req.params; 
    res.send("hello " + name);
})
//to use the routing from the use of query which we use after ?
router.get("/",(req,res)=>{
    const {query} = req;
    console.log(query);
    res.send('ok');
});

//how to put data in the system 
router.post("/",(req,res)=>{
    const {body} = req;
    console.log(body);
})

router.get("/:name",(req,res)=>{
    const {name} = req.params;
    name = name ? name:"";
    res.render("index",{name});
});
module.exports = router