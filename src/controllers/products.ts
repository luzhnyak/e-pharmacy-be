import { Request, Response } from "express";

import { HttpError, ctrlWrapper } from "../helpers";
import { ProductData } from "../db/ProductData";
import products from "../db/data/products.json";
import { ProductDto } from "../types/Dto";

// ============================== Get All

const getAllProducts = async (req: Request, res: Response) => {
  products.forEach((product) => {
    ProductData.createProduct(product);
  });

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
