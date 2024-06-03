import express from "express";
// import validateBody from "../../middlewares";
// import orderSchema from "../../shemas/order";
import ctrl from "../../controllers/customers";

const router = express.Router();

router.get("/", ctrl.getAllCustomers);

router.get("/:id", ctrl.getCustomerById);

export default router;
