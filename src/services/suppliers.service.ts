import { SupplierData } from "../db/SupplierData";

export class SuppliersService {
  static async getAllSuppliers() {
    const customers = await SupplierData.getAllSuppliers();

    return customers;
  }
}
