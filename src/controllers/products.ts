import { Request, Response } from "express";

import { HttpError, ctrlWrapper } from "../helpers";
// import { loadData } from "../db/data/loadData";

import { ProductsService } from "../services/products.service";

// ============================== Get All

const getAllProducts = async (req: Request, res: Response) => {
  const products = await ProductsService.getAllProducts();

  res.json({ data: products });
};

// ============================== Get by ID

const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await ProductsService.getProductById(+id);

  res.json({ data: product });
};

// ============================== Add Product

const createProduct = async (req: Request, res: Response) => {
  const body = req.body;

  const product = await ProductsService.createProduct(body);

  res.json({ data: product });
};

// ============================== Update Product

const updateProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;

  const product = await ProductsService.updateProductById(body, +id);

  res.json({ data: product });
};

// ============================== Delete by ID

const deleteProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await ProductsService.deleteProductById(+id);

  res.json({ data: product });
};

export default {
  getAllProducts: ctrlWrapper(getAllProducts),
  getProductById: ctrlWrapper(getProductById),
  createProduct: ctrlWrapper(createProduct),
  updateProductById: ctrlWrapper(updateProductById),
  deleteProductById: ctrlWrapper(deleteProductById),
};
