import { ProductData } from "../db/ProductData";
import { ProductDto } from "../types/Dto";

export class ProductsService {
  static async getAllProducts() {
    const products = await ProductData.getAllProducts();

    return products;
  }

  static async getProductById(id: number) {
    const products = await ProductData.getProductById(id);

    return products;
  }

  static async createProduct(productObj: ProductDto) {
    const product = await ProductData.createProduct(productObj);

    return product;
  }

  static async updateProductById(productObj: ProductDto, id: number) {
    const product = await ProductData.updateProductById(productObj, id);

    return product;
  }

  static async deleteProductById(id: number) {
    const product = await ProductData.deleteProductById(id);

    return product;
  }
}
