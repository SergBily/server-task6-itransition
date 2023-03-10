import UserModel from '../models/userModel.js'

class UserService {
  async getAllUsers() {
    return await UserModel.find({}, { name: 1, _id: 1 });
  };
}

export const userService = new UserService();