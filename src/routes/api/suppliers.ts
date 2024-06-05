import express from "express";

import ctrl from "../../controllers/suppliers";

const router = express.Router();

router.get("/", ctrl.getAllSuppliers);

export default router;
