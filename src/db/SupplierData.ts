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
      "INSERT INTO suppliers (name, address, suppliers, date, amount, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";

    const result = await pool.query<SupplierDto>(query, [
      supplierObj.name,
      supplierObj.address,
      supplierObj.suppliers,
      supplierObj.date,
      supplierObj.amount,
      supplierObj.status,
    ]);

    return result.rows[0];
  }

  static async updateSupplierById(supplierObj: SupplierDto, id: number) {
    const query = `UPDATE suppliers  
          SET name = $1, 
          address = $2,
          suppliers = $3, 
          date = $4,
          amount = $5,
          status = $6
          WHERE id = $7
          RETURNING *`;

    const result = await pool.query<SupplierDto>(query, [
      supplierObj.name,
      supplierObj.address,
      supplierObj.suppliers,
      supplierObj.date,
      supplierObj.amount,
      supplierObj.status,
      id,
    ]);

    return result.rows[0];
  }
}
