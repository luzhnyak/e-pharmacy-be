import { pool } from "./config";

import { CustomerDto } from "../types/Dto";

export class CustomerData {
  static async getAllCustomers() {
    const query = "SELECT * FROM customers";
    const result = await pool.query<CustomerDto>(query);
    return result.rows;
  }

  static async getCustomerById(id: number) {
    const query = "SELECT * FROM customers WHERE id = $1";
    const result = await pool.query<CustomerDto>(query, [id]);
    return result.rows[0];
  }

  static async getCustomerByEmail(email: number) {
    const query = "SELECT * FROM customers WHERE email = $1";
    const result = await pool.query<CustomerDto>(query, [email]);
    return result.rows[0];
  }

  static async createCustomer(customerObj: CustomerDto) {
    const query = `INSERT INTO customers
      (photo, name, email, spent, phone, address, register_date)
      VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING * `;

    const result = await pool.query<CustomerDto>(query, [
      customerObj.photo,
      customerObj.name,
      customerObj.email,
      customerObj.spent,
      customerObj.phone,
      customerObj.address,
      customerObj.register_date,
    ]);

    return result.rows[0];
  }

  static async updateCustomerById(customerObj: CustomerDto, id: number) {
    const query = `UPDATE customers  
          SET photo = $1,
          name = $2, 
          email = $3, 
          spent = $4,
          phone = $5,
          address = $6,
          register_date = $7,
          WHERE id = $8
          RETURNING *`;

    const result = await pool.query<CustomerDto>(query, [
      customerObj.photo,
      customerObj.name,
      customerObj.email,
      customerObj.spent,
      customerObj.phone,
      customerObj.address,
      customerObj.register_date,
      id,
    ]);

    return result.rows[0];
  }
}
