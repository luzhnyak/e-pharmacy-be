import { Pool, QueryResult } from "pg";
import { pool } from "./config";

import { UserDto } from "../types/Dto";

export class UserData {
  static async getAllUsers() {
    const query = "SELECT * FROM users";
    const result = await pool.query<UserDto>(query);
    return result.rows;
  }

  static async getUserById(id: number) {
    const query = "SELECT * FROM users WHERE id = $1";
    const result = await pool.query<UserDto>(query, [id]);
    return result.rows[0];
  }

  static async getUserByEmail(email: string) {
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await pool.query<UserDto>(query, [email]);
    return result.rows[0];
  }

  static async createUser(userObj: UserDto) {
    const query =
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";

    const result = await pool.query<UserDto>(query, [
      userObj.name,
      userObj.email,
      userObj.password,
    ]);

    return result.rows[0];
  }

  static async updateUserById(userObj: UserDto, id: number) {
    const query = `UPDATE users  
          SET name = $1, 
          email = $2, 
          password = $3,          
          WHERE id = $4
          RETURNING *`;

    const result = await pool.query<UserDto>(query, [
      userObj.name,
      userObj.email,
      userObj.password,
      id,
    ]);

    return result.rows[0];
  }
}
