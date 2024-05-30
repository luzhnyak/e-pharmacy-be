import { Pool, QueryResult } from "pg";
import { pool } from "./config";

import { NearestPharmacyDto } from "../types/Dto";

export class NearestPharmacysData {
  static async getAllNearestPharmacys() {
    const query = "SELECT * FROM nearest_pharmacies";
    const result = await pool.query<NearestPharmacyDto>(query);
    return result.rows;
  }

  static async getNearestPharmacyById(id: number) {
    const query = "SELECT * FROM nearest_pharmacies WHERE id = $1";
    const result = await pool.query<NearestPharmacyDto>(query, [id]);
    return result.rows[0];
  }

  static async getNearestPharmacyByEmail(email: number) {
    const query = "SELECT * FROM nearest_pharmacies WHERE email = $1";
    const result = await pool.query<NearestPharmacyDto>(query, [email]);
    return result.rows[0];
  }

  static async createNearestPharmacy(nearestPharmacyObj: NearestPharmacyDto) {
    const query = `INSERT INTO nearest_pharmacies 
        (name, address, city, phone, rating)
        VALUES ($1, $2, $3, $4, $5) RETURNING * `;

    const result = await pool.query<NearestPharmacyDto>(query, [
      nearestPharmacyObj.name,
      nearestPharmacyObj.address,
      nearestPharmacyObj.city,
      nearestPharmacyObj.phone,
      nearestPharmacyObj.rating,
    ]);

    return result.rows[0];
  }

  static async updateNearestPharmacyById(
    nearestPharmacyObj: NearestPharmacyDto,
    id: number
  ) {
    const query = `UPDATE nearest_pharmacies  
         SET name = $1, 
          address = $2, 
          city = $3,
          phone = $4,
          rating = $5       
          WHERE id = $6
          RETURNING *`;

    const result = await pool.query<NearestPharmacyDto>(query, [
      nearestPharmacyObj.name,
      nearestPharmacyObj.address,
      nearestPharmacyObj.city,
      nearestPharmacyObj.phone,
      nearestPharmacyObj.rating,
      id,
    ]);

    return result.rows[0];
  }
}
