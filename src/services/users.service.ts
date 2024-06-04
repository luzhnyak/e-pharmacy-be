import bcrypt from "bcrypt";
import { UserDto } from "../types/Dto";
import { UserData } from "../db/UserData";
import { HttpError } from "../helpers";
import { TokenService } from "./token.service";
import { emit } from "process";

export class UserService {
  static async register(userObj: UserDto) {
    const user = await UserData.getUserByEmail(userObj.email);

    if (user) {
      throw new HttpError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(userObj.password, 10);

    const newUser = await UserData.createUser({
      ...userObj,
      password: hashPassword,
    });

    return { id: newUser.id, name: newUser.name, email: newUser.email };
  }

  static async login(userObj: UserDto) {
    const user = await UserData.getUserByEmail(userObj.email);

    if (!user) {
      throw new HttpError(404, "User not found");
    }

    const isPasswordEquals = await bcrypt.compare(
      userObj.password,
      user.password
    );

    if (!isPasswordEquals) {
      throw new HttpError(401, "Email or password is wrong");
    }

    return {
      token: TokenService.generateTokens({
        id: user.id!,
        name: user.name,
        email: user.email,
      }),
      user: { id: user.id, name: user.name, email: user.email },
    };
  }

  static async logout() {
    return "User successfully logged out";
  }
}
