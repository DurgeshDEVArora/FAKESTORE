import express from "express";
import { GetAllProducts, ProductByID } from "../controller/Product.js";

const router = express.Router();

// @Get /api/products
// Public
router.get("/", GetAllProducts);


// @Get /api/products/:id
// Public

router.get('/:id',ProductByID)
export default router;
