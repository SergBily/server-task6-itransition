import UserModel from '../models/userModel.js'

class LoginService {
  async login(name) {
    const isUser = await UserModel.findOne({ name });
    if (!isUser) {
      await UserModel.create({ name });
    }
    return await UserModel.find();
  };
}

export const loginService = new LoginService();