import { loginService } from "../services/loginService.js";

class LoginController {
  async login(req, res, next) {
    try {
      const { name } = req.body;
      const user = await loginService.login(name);
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { id} = req.body;
      const user = await loginService.logout(id);
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

 
}

export const loginController = new LoginController();