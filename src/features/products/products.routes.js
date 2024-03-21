import express from "express";
import { getProducts, createProduct, deleteProduct, updateProduct } from "./products.controller.js";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/create").post(createProduct);
router.route("/:id").delete(deleteProduct);
router.route("/:id/update_quantity").post(updateProduct);

export default router;