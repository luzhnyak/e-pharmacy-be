import { Request, Response } from "express";

import { HttpError, ctrlWrapper } from "../helpers";

import { CustomersService } from "../services/customers.service";

// ============================== Get All

const getAllCustomers = async (req: Request, res: Response) => {
  const customers = await CustomersService.getAllCustomers();

  res.json({ data: customers });
};

export default {
  getAllCustomers: ctrlWrapper(getAllCustomers),
};
