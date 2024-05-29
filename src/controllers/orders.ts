import { HttpError, ctrlWrapper } from "../helpers";

import { Request, Response } from "express";

// import Product from "../db/models/product";
// import Order from "../db/models/order";
// import OrderProduct from "../db/models/orderProduct";

// ============================== Get All

const getAllOrders = async (req: Request, res: Response) => {
  res.json({ data: [] });
};

// ============================== Get by ID

const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({ data: { id } });
};

export default {
  getAllOrders: ctrlWrapper(getAllOrders),
  getOrderById: ctrlWrapper(getOrderById),
};
