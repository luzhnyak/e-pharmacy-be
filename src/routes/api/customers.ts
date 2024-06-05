import express from "express";

import ctrl from "../../controllers/customers";

const router = express.Router();

router.get("/", ctrl.getAllCustomers);

export default router;
