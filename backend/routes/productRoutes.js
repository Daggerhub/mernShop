import express from 'express'
import asynchandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

//Fetch all product
router.get('/',asynchandler(async (req,res)=>{

    const products = await Product.find({})
    res.json(products)
     
})) 

//Fetch Product by ID 

router.get('/:id',asynchandler(async(req,res)=>{

    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }
    else{
        res.status(404).json({message : 'Product not found'})
    }

    // res.json(product)
}))


export default router