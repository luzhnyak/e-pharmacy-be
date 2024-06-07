import express, { ErrorRequestHandler, NextFunction } from "express";
import { Request, Response } from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import usersRouter from "./routes/api/users";
import productsRouter from "./routes/api/products";
import customersRouter from "./routes/api/customers";
import suppliersRouter from "./routes/api/suppliers";
import incomeExpensesRouter from "./routes/api/incomeExpenses";
import orderRouter from "./routes/api/orders";

dotenv.config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const allowedOrigins = [
  "https://epharmacy.vercel.app",
  "http://localhost:5173/",
];

const corsOptions = {
  origin: function (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }, // Домен, якому дозволено доступ
  optionsSuccessStatus: 200, // Для старих браузерів, які не підтримують статус 204 для preflight запитів
};

app.use(logger(formatsLogger));
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/customers", customersRouter);
app.use("/api/suppliers", suppliersRouter);
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
