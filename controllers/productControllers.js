const Product = require('../models/productModels')
const mongoose = require('mongoose')

//get all products
const getProducts = async(req,res)=>{
    const products = await Product.find({})
    res.status(200).json(products)
}



//post products
const createProduct = async(req,res)=>{
    const {name,description,image,price} = req.body

    try {
       const product = await Product.create({name,description,image,price}) 
       res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


//get one product
const getProduct = async(req,res)=>{
    const {id}= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such product"})
    }

    const product = await Product.findById(id)

    if(!product){
        return res.status(404).json({error:'No such product'})
    }

    res.status(200).json(product)
}



//update product
const updateProduct = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"No such product"})
    }

    const product = await Product.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!product){
        return res.status(400).json({error:"No such product"})
    }
    res.status(200).json(product)
}



//delete product
const deleteProduct = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"No such product"})
    }

    const product = await Product.findOneAndDelete({_id:id})
    
    if(!product){
        return res.status(400).json("No such product")
    }
    res.status(200).json(product)
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}