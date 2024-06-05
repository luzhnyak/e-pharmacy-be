import express, { ErrorRequestHandler, NextFunction } from "express";
import { Request, Response } from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import usersRouter from "./routes/api/users";
import productsRouter from "./routes/api/products";
import customersRouter from "./routes/api/customers";
import incomeExpensesRouter from "./routes/api/incomeExpenses";
import orderRouter from "./routes/api/orders";

dotenv.config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/customers", customersRouter);
app.use("/api/income-expenses", incomeExpensesRouter);
app.use("/api/orders", orderRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
