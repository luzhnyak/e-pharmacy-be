import { HttpError, ctrlWrapper } from "../helpers";

import { Request, Response } from "express";
import { OrdersService } from "../services/orders.service";

// ============================== Get All

const getAllOrders = async (req: Request, res: Response) => {
  const orders = await OrdersService.getAllOrders();
  res.json({ data: orders });
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
