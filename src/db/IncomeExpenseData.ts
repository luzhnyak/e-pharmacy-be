import { Pool, QueryResult } from "pg";
import { pool } from "./config";

import { IncomeExpenseDto } from "../types/Dto";

export class IncomeExpenseData {
  static async getAllIncomeExpenses() {
    const query = "SELECT * FROM income_expenses";
    const result = await pool.query<IncomeExpenseDto>(query);
    return result.rows;
  }

  static async getIncomeExpenseById(id: number) {
    const query = "SELECT * FROM income_expenses WHERE id = $1";
    const result = await pool.query<IncomeExpenseDto>(query, [id]);
    return result.rows[0];
  }

  static async createIncomeExpense(incomeExpenseObj: IncomeExpenseDto) {
    const query = `INSERT INTO income_expenses 
      (name, amount, type) VALUES ($1, $2, $3) RETURNING * `;

    const result = await pool.query<IncomeExpenseDto>(query, [
      incomeExpenseObj.name,
      incomeExpenseObj.amount,
      incomeExpenseObj.type,
    ]);

    return result.rows[0];
  }

  static async updateIncomeExpenseById(
    incomeExpenseObj: IncomeExpenseDto,
    id: number
  ) {
    const query = `UPDATE income_expenses  
          SET name = $1, 
          amount = $2, 
          type = $3,          
          WHERE id = $4
          RETURNING *`;

    const result = await pool.query<IncomeExpenseDto>(query, [
      incomeExpenseObj.name,
      incomeExpenseObj.amount,
      incomeExpenseObj.type,
      id,
    ]);

    return result.rows[0];
  }
}
