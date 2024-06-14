import { Request, Response } from "express";

import { HttpError, ctrlWrapper } from "../helpers";
import { UserData } from "../db/UserData";

import { UserService } from "../services/users.service";
import { AuthenticatedRequest } from "../types/types";

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

// ============================== Register

const register = async (req: Request, res: Response) => {
  const body = req.body;

  const data = await UserService.register(body);

  res.json(data);
};

// ============================== Login

const login = async (req: Request, res: Response) => {
  const body = req.body;

  const data = await UserService.login(body);

  res.json(data);
};

// ============================== Logout

const logout = async (req: Request, res: Response) => {
  res.json({ data: "loout" });
};

// ============================== Refresh user

const refreshUser = async (req: AuthenticatedRequest, res: Response) => {
  const user = req.user!;

  const data = await UserService.refresh(user);

  res.json(data);
};

export default {
  getAllUsers: ctrlWrapper(getAllUsers),
  getUserById: ctrlWrapper(getUserById),
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  refreshUser: ctrlWrapper(refreshUser),
};
