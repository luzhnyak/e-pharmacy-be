import express from "express";
// import validateBody from "../../middlewares";
// import orderSchema from "../../shemas/order";
import ctrl from "../../controllers/products";

const router = express.Router();

router.get("/", ctrl.getAllProducts);

router.get("/:id", ctrl.getProductById);

export default router;
