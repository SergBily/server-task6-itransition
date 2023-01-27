import { userService } from "../services/userService";

class UsersController {
  async getUsers(req, res, next) {
    try {
      const allUsers = await userService.getAllUsers();
      return res.json(allUsers);
    } catch (e) {
      next(e);
    }
  }
}

export const usersController = new UsersController();