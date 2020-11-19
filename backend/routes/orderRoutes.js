import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders } from '../controllers/orderController.js'
const router = express.Router()

import { authUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/userControllers.js'

router.route('/').post(protect, addOrderItems)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)


export default router