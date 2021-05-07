import express from 'express'
import {authUser , registerUser ,getUserProfile} from '../controllers/userController.js'
const router = express.Router()
import { protect } from '../middlewares/authMiddleware.js' 


router.route('/').post(registerUser)
router.post('/login' , authUser)
router.route('/profile').get(protect , getUserProfile)

export default router