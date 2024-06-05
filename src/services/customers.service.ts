import { CustomerData } from "../db/CustomerData";

export class CustomersService {
  static async getAllCustomers() {
    const customers = await CustomerData.getAllCustomers();

    return customers.slice(0, 5);
  }
}
