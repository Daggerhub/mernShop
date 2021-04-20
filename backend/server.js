import express from 'express'
import connectDB from './config/db.js'
import product from './data/product.js'
import dotenv from 'dotenv'
dotenv.config()

connectDB()

const app = express()

app.get('/' , (req ,res) => {
    res.send('API is running')
})

app.get('/api/products',(req,res)=>{
    res.json(product)
})

app.get('/api/products/:id',(req,res)=>{
    const products  = find((p) => p._id === req.params.id)
    res.json(products)
})

const PORT = process.env.PORT || 5000

app.listen(5000 , console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
