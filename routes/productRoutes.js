const express = require('express')

const{createProduct, getProducts, getProduct, updateProduct, deleteProduct} = require("../controllers/productControllers")

const router = express.Router()

router.get('/',getProducts)

router.post('/',createProduct)

router.get('/:id',getProduct)

router.patch('/:id',updateProduct)

router.delete('/:id',deleteProduct)

module.exports = router