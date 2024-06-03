import { Request, Response } from "express";

import { HttpError, ctrlWrapper } from "../helpers";
import { loadData } from "../db/data/loadData";
import { ProductData } from "../db/ProductData";

// ============================== Get All

const getAllProducts = async (req: Request, res: Response) => {
  const products = await ProductData.getAllProducts();

  res.json({ data: products });
};

// ============================== Get by ID

const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await ProductData.getProductById(+id);

  res.json({ data: product });
};

// ============================== Add Product

const createProduct = async (req: Request, res: Response) => {
  const body = req.body;

  const product = await ProductData.createProduct(body);

  res.json({ data: product });
};

// ============================== Update Product

const updateProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;

  const product = await ProductData.updateProductById(body, +id);

  res.json({ data: product });
};

// ============================== Get by ID

const deleteProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await ProductData.deleteProductById(+id);

  res.json({ data: product });
};

export default {
  getAllProducts: ctrlWrapper(getAllProducts),
  getProductById: ctrlWrapper(getProductById),
  createProduct: ctrlWrapper(createProduct),
  updateProductById: ctrlWrapper(updateProductById),
  deleteProductById: ctrlWrapper(deleteProductById),
};
