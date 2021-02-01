import express from "express"
import { protect, admin } from "../middleware/authMiddleware.js"

const router = express.Router()

import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productControllers.js"

router.route("/").get(getProducts)
router.route("/top").get(getTopProducts)
router.route("/").post(protect, admin, createProduct)
router.route("/:id/reviews").post(protect, createProductReview)

router.route("/:id").get(getProductById)
router.route("/:id").delete(protect, admin, deleteProduct)
router.route("/:id").put(protect, admin, updateProduct)

export default router
