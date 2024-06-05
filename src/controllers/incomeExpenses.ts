import { Request, Response } from "express";

import { HttpError, ctrlWrapper } from "../helpers";
import { IncomeExpenseService } from "../services/incomeExpenses.service";

// ============================== Get All

const getAllIncomeExpenses = async (req: Request, res: Response) => {
  const incomeExpenses = await IncomeExpenseService.getAllIncomeExpenses();

  res.json({ data: incomeExpenses });
};

export default {
  getAllIncomeExpenses: ctrlWrapper(getAllIncomeExpenses),
};
