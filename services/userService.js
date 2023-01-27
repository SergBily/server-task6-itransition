import UserModel from '../models/userModel.js'

class UserService {
  async getAllUsers() {
    return await UserModel.find();
  };
}

export const userService = new UserService();