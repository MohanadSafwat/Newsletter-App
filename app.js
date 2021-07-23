const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
})

const url = "https://${dc}.api.mailchimp.com/3.0/lists"
app.post("/",(req,res)=>{
    const firstName = req.body.fn;
    const lastName = req.body.ln;
    const email = req.body.em;


})
app.listen(3000,(req,res)=>{
    console.log("hello");
})

// API KEY 
// b93a54f99826efc9f1655205f147e572-us6

// LIST
//d5335fdeff