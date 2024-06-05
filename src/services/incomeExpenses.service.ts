import { IncomeExpenseData } from "../db/IncomeExpenseData";

export class IncomeExpenseService {
  static async getAllIncomeExpenses() {
    const customers = await IncomeExpenseData.getAllIncomeExpenses();

    return customers.slice(0, 6);
  }
}
