import { Pool, QueryResult } from "pg";
import { pool } from "./config";

import { SupplierDto } from "../types/Dto";

export class SupplierData {
  static async getAllSuppliers() {
    const query = "SELECT * FROM suppliers";
    const result = await pool.query<SupplierDto>(query);
    return result.rows;
  }

  static async getSupplierById(id: number) {
    const query = "SELECT * FROM suppliers WHERE id = $1";
    const result = await pool.query<SupplierDto>(query, [id]);
    return result.rows[0];
  }

  static async getSupplierByEmail(email: number) {
    const query = "SELECT * FROM suppliers WHERE email = $1";
    const result = await pool.query<SupplierDto>(query, [email]);
    return result.rows[0];
  }

  static async createSupplier(supplierObj: SupplierDto) {
    const query =
      "INSERT INTO suppliers (name, address, date, amount, status) VALUES ($1, $2, $3, $4, $5) RETURNING *";

    const result = await pool.query<SupplierDto>(query, [
      supplierObj.name,
      supplierObj.address,
      supplierObj.date,
      supplierObj.amount,
      supplierObj.status,
    ]);

    return result.rows[0];
  }

  static async updateSupplierById(supplierObj: SupplierDto, id: number) {
    const query = `UPDATE users  
          SET name = $1, 
          address = $2, 
          date = $3,
          amount = $4,
          status = $5,
          WHERE id = $6
          RETURNING *`;

    const result = await pool.query<SupplierDto>(query, [
      supplierObj.name,
      supplierObj.address,
      supplierObj.date,
      supplierObj.amount,
      supplierObj.status,
      id,
    ]);

    return result.rows[0];
  }
}
