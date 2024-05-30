import { ProductDto } from "../../types/Dto";
import { ProductData } from "../ProductData";

import products from "./products.json";
import suppliers from "./suppliers.json";
import customers from "./customers.json";
import orders from "./orders.json";
import incomeExpenses from "./income-expenses.json";
import reviews from "./reviews.json";
import pharmacies from "./pharmacies.json";
import nearestPharmacies from "./nearest_pharmacies.json";

import { OrderData } from "../OrderData";
import { SupplierData } from "../SupplierData";
import { CustomerData } from "../CustomerData";
import { IncomeExpenseData } from "../IncomeExpenseData";
import { ReviewData } from "../ReviewData";
import { PharmacyData } from "../PharmacyData";
import { NearestPharmacysData } from "../NearestPharmacyData";

export const loadData = () => {
  console.log("=== Load Products");

  products.forEach((product) => {
    ProductData.createProduct(product);
  });

  console.log("=== Load Suppliers");

  suppliers.forEach((supplier) => {
    SupplierData.createSupplier(supplier);
  });

  console.log("=== Load Customers");

  customers.forEach((customer) => {
    CustomerData.createCustomer(customer);
  });

  console.log("=== Load Orders");

  orders.forEach((order) => {
    OrderData.createOrder(order);
  });

  console.log("=== Load Income Expenses");

  incomeExpenses.forEach((incomeExpense) => {
    IncomeExpenseData.createIncomeExpense(incomeExpense);
  });

  console.log("=== Load Reviews");

  reviews.forEach((review) => {
    ReviewData.createReview(review);
  });

  console.log("=== Load Pharmacies");

  pharmacies.forEach((pharmacy) => {
    PharmacyData.createPharmacy(pharmacy);
  });

  console.log("=== Load Nearest Pharmacies");

  nearestPharmacies.forEach((nearestPharmacy) => {
    NearestPharmacysData.createNearestPharmacy(nearestPharmacy);
  });
};
