//import packages
const express = require("express")
const app=express()

//import cors
const cors =require("cors")
//configure thr express and middleware

app.use(cors());
app.use(express.json())
//export the app

module.exports=app