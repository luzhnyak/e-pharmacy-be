import { Request, Response } from "express";

import { HttpError, ctrlWrapper } from "../helpers";
import { UserData } from "../db/UserData";

// ============================== Get All

const getAllUsers = async (req: Request, res: Response) => {
  const users = await UserData.getAllUsers();

  res.json({ data: users });
};

// ============================== Get by ID

const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await UserData.getUserById(+id);

  res.json({ data: user });
};

// ============================== Add User

const createUser = async (req: Request, res: Response) => {
  const body = req.body;

  const user = await UserData.createUser(body);

  res.json({ data: user });
};

// ============================== Update User

const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;

  const user = await UserData.updateUserById(body, +id);

  res.json({ data: user });
};

// ============================== Login

const login = async (req: Request, res: Response) => {
  const body = req.body;

  const user = await UserData.getUserByEmail(body.email);

  res.json({ data: user });
};

// ============================== Logout

const logout = async (req: Request, res: Response) => {
  res.json({ data: "loout" });
};

export default {
  getAllUsers: ctrlWrapper(getAllUsers),
  getUserById: ctrlWrapper(getUserById),
  createUser: ctrlWrapper(createUser),
  updateUserById: ctrlWrapper(updateUserById),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
};
