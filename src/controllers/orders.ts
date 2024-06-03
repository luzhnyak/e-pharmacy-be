import { HttpError, ctrlWrapper } from "../helpers";

import { Request, Response } from "express";

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
