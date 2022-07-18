require("dotenv").config();
const mongoose = require('mongoose')

const MONGODB = process.env.MONGODB;

mongoose.connect(MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });


let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})