import express from "express";

import ctrl from "../../controllers/incomeExpenses";

const router = express.Router();

router.get("/", ctrl.getAllIncomeExpenses);

export default router;
