import express from 'express'
import {getProducts , getProductById} from '../controllers/productController.js'
const router = express.Router()

//Fetch all product
router.route('/').get(getProducts)

//Fetch Product by ID 

router.route('/:id').get(getProductById)


export default router