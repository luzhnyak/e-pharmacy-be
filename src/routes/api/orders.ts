import express from "express";
// import validateBody from "../../middlewares";
// import orderSchema from "../../shemas/order";
import ctrl from "../../controllers/orders";

const router = express.Router();

router.get("/", ctrl.getAllOrders);

router.get("/:id", ctrl.getOrderById);

export default router;
