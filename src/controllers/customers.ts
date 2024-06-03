import { Request, Response } from "express";

import { HttpError, ctrlWrapper } from "../helpers";
import { CustomerData } from "../db/CustomerData";

// ============================== Get All

const getAllCustomers = async (req: Request, res: Response) => {
  const customers = await CustomerData.getAllcustomers();

  res.json({ data: customers });
};

// ============================== Get by ID

const getCustomerById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const customer = await CustomerData.getCustomerById(+id);

  res.json({ data: customer });
};

export default {
  getAllCustomers: ctrlWrapper(getAllCustomers),
  getCustomerById: ctrlWrapper(getCustomerById),
};
