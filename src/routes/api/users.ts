import express from "express";
// import validateBody from "../../middlewares";
// import orderSchema from "../../shemas/order";
import ctrl from "../../controllers/users";
import { aunthenticate } from "../../middlewares/authenticate";

const router = express.Router();

router.get("/", ctrl.getAllUsers);

router.get("/refresh", aunthenticate, ctrl.refreshUser);

router.post("/register", ctrl.register);

router.post("/login", ctrl.login);

router.get("/logout", ctrl.logout);

router.get("/:id", ctrl.getUserById);

export default router;
