import { Request, Response } from "express";

import { HttpError, ctrlWrapper } from "../helpers";

// ============================== Get All

const getAllProducts = async (req: Request, res: Response) => {
  res.json({ data: [] });
};

// ============================== Get by ID

const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({ data: { id } });
};

export default {
  getAllProducts: ctrlWrapper(getAllProducts),
  getProductById: ctrlWrapper(getProductById),
};
