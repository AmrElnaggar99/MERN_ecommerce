import express from 'express'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

import { getProducts, getProductById, deleteProduct, updateProduct, createProduct } from '../controllers/productControllers.js'

router.route('/').get(getProducts)
router.route('/').post(protect, admin, createProduct)


router.route('/:id').get(getProductById)
router.route('/:id').delete(protect, admin, deleteProduct)
router.route('/:id').put(protect, admin, updateProduct)


export default router