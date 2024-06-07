import { Pool, QueryResult } from "pg";
import { pool } from "./config";

import { ProductDto } from "../types/Dto";

export class ProductData {
  static async getAllProducts() {
    const query = "SELECT * FROM products";
    const result = await pool.query<ProductDto>(query);
    return result.rows;
  }

  static async getProductById(id: number) {
    const query = "SELECT * FROM products WHERE id = $1";
    const result = await pool.query<ProductDto>(query, [id]);
    return result.rows[0];
  }

  static async createProduct(productObj: ProductDto) {
    const query = `INSERT INTO products 
      (name, suppliers, stock, price, category) VALUES
      ($1, $2, $3, $4, $5) RETURNING *`;

    const result = await pool.query<ProductDto>(query, [
      productObj.name,
      productObj.suppliers,
      productObj.stock,
      productObj.price,
      productObj.category,
    ]);

    return result.rows[0];
  }

  // static async createProduct(productObj: ProductDto) {
  //   const query = `INSERT INTO products
  //     (id, name, photo, suppliers, stock, price, category) VALUES
  //     ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

  //   const result = await pool.query<ProductDto>(query, [
  //     productObj.id,
  //     productObj.name,
  //     productObj.photo,
  //     productObj.suppliers,
  //     productObj.stock,
  //     productObj.price,
  //     productObj.category,
  //   ]);

  //   return result.rows[0];
  // }

  static async updateProductById(productObj: ProductDto, id: number) {
    const query = `UPDATE products  
          SET name = $1,           
          suppliers = $2,
          stock = $3,
          price = $4,
          category = $5
          WHERE id = $6
          RETURNING *`;

    const result = await pool.query<ProductDto>(query, [
      productObj.name,
      productObj.suppliers,
      productObj.stock,
      productObj.price,
      productObj.category,
      id,
    ]);

    return result.rows[0];
  }

  static async deleteProductById(id: number) {
    const query = `DELETE FROM products WHERE id = $1 RETURNING *`;

    const result = await pool.query<ProductDto>(query, [id]);

    return result.rows[0];
  }
}
