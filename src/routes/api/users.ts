import express from "express";
// import validateBody from "../../middlewares";
// import orderSchema from "../../shemas/order";
import ctrl from "../../controllers/users";

const router = express.Router();

router.get("/", ctrl.getAllUsers);

router.get("/:id", ctrl.getUserById);

router.post("/register", ctrl.register);

router.post("/login", ctrl.login);

router.get("/logout", ctrl.logout);

export default router;
