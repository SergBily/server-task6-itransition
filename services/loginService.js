import UserModel from '../models/userModel.js'

class LoginService {
  async login(name) {
    const user = await UserModel.findOne({ name });
    if (!user) {
      return await UserModel.create({ name, status: true });
    } else {
      await UserModel.updateOne({ name }, { $set: { status: true } });
      return user
    }
  };

  async logout(id) {
      return await UserModel.updateOne({ id }, { $set: { status: false } });
  };
}

export const loginService = new LoginService();