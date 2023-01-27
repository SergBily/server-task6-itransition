import UserModel from '../models/userModel.js'

class LoginService {
  async login(name) {
    const isUser = await UserModel.findOne({ name });
    if (!isUser) {
      return await UserModel.create({ name, status: true });
    } else {
      return await UserModel.updateOne({ name }, { $set: { status: true } });
    }
  };
}

export const loginService = new LoginService();