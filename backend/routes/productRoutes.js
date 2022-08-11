import express from 'express'
import {getProductById, getFiltertedProducts , getSortByData} from '../controllers/productController.js'
const router = express.Router()

//Fetch all product
router.route('/sortby/:query').get(getSortByData)

//Fetch Product by ID 
router.route('/:id').get(getProductById)

router.route('/search/:query').get(getFiltertedProducts)

export default router