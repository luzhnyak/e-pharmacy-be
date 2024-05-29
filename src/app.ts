import express from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";

// const logger = require("morgan");
// const cors = require("cors");
// const dotenv = require("dotenv");

import productsRouter from "./routes/api/products";
import orderRouter from "./routes/api/orders";

dotenv.config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/orders", orderRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
// });

export default app;