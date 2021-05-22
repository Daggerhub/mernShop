import express from 'express'
import {authUser , registerUser ,getUserProfile, updateUserProfile, getUsers} from '../controllers/userController.js'
const router = express.Router()
import { protect , admin } from '../middlewares/authMiddleware.js' 


router.route('/').post(registerUser).get(protect , admin ,  getUsers)
router.post('/login' , authUser)
router.route('/profile').get(protect , getUserProfile).put(protect
, updateUserProfile)

export default router
 