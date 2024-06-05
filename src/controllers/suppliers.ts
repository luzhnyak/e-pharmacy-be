import { Request, Response } from "express";

import { HttpError, ctrlWrapper } from "../helpers";

import { SuppliersService } from "../services/suppliers.service";

// ============================== Get All

const getAllSuppliers = async (req: Request, res: Response) => {
  const customers = await SuppliersService.getAllSuppliers();

  res.json({ data: customers });
};

export default {
  getAllSuppliers: ctrlWrapper(getAllSuppliers),
};
