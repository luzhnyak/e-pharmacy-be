import { Request, Response } from "express";

import { ctrlWrapper } from "../helpers";

import { SuppliersService } from "../services/suppliers.service";

// ============================== Get All

const getAllSuppliers = async (req: Request, res: Response) => {
  const customers = await SuppliersService.getAllSuppliers();

  res.json({ data: customers });
};

// ============================== Add Supplier

const createSupplier = async (req: Request, res: Response) => {
  const body = req.body;

  const supplier = await SuppliersService.createSupplier(body);

  res.json({ data: supplier });
};

// ============================== Update Supplier

const updateSupplierById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;

  const supplier = await SuppliersService.updateSupplierById(body, +id);

  res.json({ data: supplier });
};

export default {
  getAllSuppliers: ctrlWrapper(getAllSuppliers),
  createSupplier: ctrlWrapper(createSupplier),
  updateSupplierById: ctrlWrapper(updateSupplierById),
};
