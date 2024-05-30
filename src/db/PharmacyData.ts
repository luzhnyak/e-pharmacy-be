import { Pool, QueryResult } from "pg";
import { pool } from "./config";

import { PharmacyDto } from "../types/Dto";

export class PharmacyData {
  static async getAllPharmacys() {
    const query = "SELECT * FROM pharmacies";
    const result = await pool.query<PharmacyDto>(query);
    return result.rows;
  }

  static async getPharmacyById(id: number) {
    const query = "SELECT * FROM pharmacies WHERE id = $1";
    const result = await pool.query<PharmacyDto>(query, [id]);
    return result.rows[0];
  }

  static async getPharmacyByEmail(email: number) {
    const query = "SELECT * FROM pharmacies WHERE email = $1";
    const result = await pool.query<PharmacyDto>(query, [email]);
    return result.rows[0];
  }

  static async createPharmacy(pharmacyObj: PharmacyDto) {
    const query = `INSERT INTO pharmacies 
      (name, address, city, phone, rating)
      VALUES($1, $2, $3, $4, $5) RETURNING * `;

    const result = await pool.query<PharmacyDto>(query, [
      pharmacyObj.name,
      pharmacyObj.address,
      pharmacyObj.city,
      pharmacyObj.phone,
      pharmacyObj.rating,
    ]);

    return result.rows[0];
  }

  static async updatePharmacyById(pharmacyObj: PharmacyDto, id: number) {
    const query = `UPDATE pharmacies  
          SET name = $1, 
          address = $2, 
          city = $3,
          phone = $4,
          rating = $5       
          WHERE id = $6
          RETURNING *`;

    const result = await pool.query<PharmacyDto>(query, [
      pharmacyObj.name,
      pharmacyObj.address,
      pharmacyObj.city,
      pharmacyObj.phone,
      pharmacyObj.rating,
      id,
    ]);

    return result.rows[0];
  }
}
