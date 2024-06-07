import express from "express";

import ctrl from "../../controllers/suppliers";

const router = express.Router();

router.get("/", ctrl.getAllSuppliers);

router.post("/", ctrl.createSupplier);

router.put("/:id", ctrl.updateSupplierById);

export default router;
