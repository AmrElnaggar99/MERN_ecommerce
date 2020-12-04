import express from 'express'
import { protect, admin } from '../middleware/authMiddleware.js'
const router = express.Router()

import { updateUser, getUserById, authUser, getUserProfile, getUsers, registerUser, updateUserProfile, deleteUser } from '../controllers/userControllers.js'

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/').post(registerUser)
router.route('/').get(protect, admin, getUsers)
router.route('/:id').delete(protect, admin, deleteUser)
router.route('/:id').get(protect, admin, getUserById)
router.route('/:id').put(protect, admin, updateUser)


export default router