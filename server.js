require('dotenv').config()

const express = require("express")
const mongoose = require('mongoose')

const productRoute = require('./routes/productRoutes')

//express app
const app = express()

app.use(express.json())

app.use('/api/products',productRoute)

//middlewares
app.use((req,res,next)=>{
    console.log(req.body,req.method)
    next()
})

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Database is connected successfully")

    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on`,process.env.PORT)
    })
})
.catch((e)=>{
    console.log(e)
})

