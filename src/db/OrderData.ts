import { Pool, QueryResult } from "pg";
import { pool } from "./config";

import { OrderDto } from "../types/Dto";

export class OrderData {
  static async getAllOrders() {
    const query = "SELECT * FROM orders";
    const result = await pool.query<OrderDto>(query);
    return result.rows;
  }

  static async getOrderById(id: number) {
    const query = "SELECT * FROM orders WHERE id = $1";
    const result = await pool.query<OrderDto>(query, [id]);
    return result.rows[0];
  }

  static async getOrderByEmail(email: number) {
    const query = "SELECT * FROM orders WHERE email = $1";
    const result = await pool.query<OrderDto>(query, [email]);
    return result.rows[0];
  }

  static async createOrder(orderObj: OrderDto) {
    const query = `INSERT INTO orders 
      (photo, name, address, products, price, status, order_date)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * `;

    const result = await pool.query<OrderDto>(query, [
      orderObj.photo,
      orderObj.name,
      orderObj.address,
      orderObj.products,
      orderObj.price,
      orderObj.status,
      orderObj.order_date,
    ]);

    return result.rows[0];
  }

  static async updateOrderById(orderObj: OrderDto, id: number) {
    const query = `UPDATE orders  
          SET photo = $1, 
          name = $2, 
          address = $3,
          products = $4,
          price = $5,
          status = $6,
          order_date = $7,
          WHERE id = $8
          RETURNING *`;

    const result = await pool.query<OrderDto>(query, [
      orderObj.photo,
      orderObj.name,
      orderObj.address,
      orderObj.products,
      orderObj.price,
      orderObj.status,
      orderObj.order_date,
      id,
    ]);

    return result.rows[0];
  }
}
