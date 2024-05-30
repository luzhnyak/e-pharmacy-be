import { Pool, QueryResult } from "pg";
import { pool } from "./config";

import { ReviewDto } from "../types/Dto";

export class ReviewData {
  static async getAllReviews() {
    const query = "SELECT * FROM reviews";
    const result = await pool.query<ReviewDto>(query);
    return result.rows;
  }

  static async getReviewById(id: number) {
    const query = "SELECT * FROM reviews WHERE id = $1";
    const result = await pool.query<ReviewDto>(query, [id]);
    return result.rows[0];
  }

  static async createReview(reviewObj: ReviewDto) {
    const query =
      "INSERT INTO reviews (name, testimonial) VALUES ($1, $2) RETURNING *";

    const result = await pool.query<ReviewDto>(query, [
      reviewObj.name,
      reviewObj.testimonial,
    ]);

    return result.rows[0];
  }

  static async updateReviewById(reviewObj: ReviewDto, id: number) {
    const query = `UPDATE reviews  
          SET name = $1, 
          testimonial = $2          
          WHERE id = $3
          RETURNING *`;

    const result = await pool.query<ReviewDto>(query, [
      reviewObj.name,
      reviewObj.testimonial,
      id,
    ]);

    return result.rows[0];
  }
}
