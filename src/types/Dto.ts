export type UserDto = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type ProductDto = {
  id: number;
  photo: string;
  name: string;
  suppliers: string;
  stock: number;
  price: number;
  category: string;
};

export type SupplierDto = {
  id: number;
  name: string;
  address: string;
  date: string;
  amount: number;
  status: string;
};

export type CustomerDto = {
  id: number;
  photo: string;
  name: string;
  email: string;
  spent: number;
  phone: string;
  address: string;
  register_date: string;
};

export type OrderDto = {
  id: number;
  photo: string;
  name: string;
  address: string;
  products: number;
  price: number;
  status: string;
  order_date: string;
};

export type IncomeExpensesDTO = {
  id: number;
  name: string;
  amount: number;
  type: string;
};

export type ReviewDto = {
  id: number;
  name: string;
  testimonial: string;
};

export type PharmacieDto = {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  rating: number;
};

export type LenearestPharmaciesssonsDto = {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  rating: number;
};
