export type UserDto = {
  id?: number;
  name: string;
  email: string;
  password: string;
};

export type LoginUserDto = {
  email: string;
  password: string;
};

export type ProductDto = {
  id?: number;
  photo: string;
  name: string;
  suppliers: string;
  stock: string;
  price: string;
  category: string;
};

export type SupplierDto = {
  id?: number;
  name: string;
  address: string;
  date: string;
  amount: string;
  status: string;
};

export type CustomerDto = {
  id?: number;
  photo: string;
  name: string;
  email: string;
  spent: string;
  phone: string;
  address: string;
  register_date: string;
};

export type OrderDto = {
  id?: number;
  photo: string;
  name: string;
  address: string;
  products: string;
  price: string;
  status: string;
  order_date: string;
};

export type IncomeExpenseDto = {
  id?: number;
  name: string;
  amount: string;
  type: string;
};

export type ReviewDto = {
  id?: number;
  name: string;
  testimonial: string;
};

export type PharmacyDto = {
  id?: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  rating: number;
};

export type NearestPharmacyDto = {
  id?: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  rating: number;
};
