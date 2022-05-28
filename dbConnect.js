const mongoose = require ('mongoose')

const URL= 'mongodb+srv://Sarthak2823:Sarthak1234@cluster0.vnrji.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URL)

let connectionobj = mongoose.connection

connectionobj.on('connected' , ()=>{
    console.log('MongoDB connected successfully')
})

connectionobj.on('error', ()=>{
    console.log('MongoDB connection failed')
})