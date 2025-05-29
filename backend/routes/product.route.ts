import express from "express";
import { getAllProducts, postProduct } from "../controllers/product.controller";

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', postProduct); 

export default router;
