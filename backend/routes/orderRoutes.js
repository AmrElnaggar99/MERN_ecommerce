import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addOrderItems, getOrderById, updateOrderToPaid } from '../controllers/orderController.js'
const router = express.Router()

import { authUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/userControllers.js'

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').get(protect, updateOrderToPaid)

export default router