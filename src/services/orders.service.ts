import { CustomerData } from "../db/CustomerData";
import { OrderData } from "../db/OrderData";

export class OrdersService {
  static async getAllOrders() {
    const orders = await OrderData.getAllOrders();

    return orders;
  }
}
