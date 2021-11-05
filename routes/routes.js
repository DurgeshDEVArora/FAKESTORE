import express from "express";
import ProductsRoutes from './Products.js'
import UserRoutes from './User.js'
const router = express.Router();

router.use('/user',UserRoutes)
router.use('/products',ProductsRoutes)

export default router;
