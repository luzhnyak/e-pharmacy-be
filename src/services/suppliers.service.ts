import { SupplierData } from "../db/SupplierData";
import { SupplierDto } from "../types/Dto";

export class SuppliersService {
  static async getAllSuppliers() {
    const customers = await SupplierData.getAllSuppliers();

    return customers;
  }

  static async createSupplier(supplierObj: SupplierDto) {
    const supplier = await SupplierData.createSupplier(supplierObj);

    return supplier;
  }

  static async updateSupplierById(supplierObj: SupplierDto, id: number) {
    const supplier = await SupplierData.updateSupplierById(supplierObj, id);

    return supplier;
  }
}
