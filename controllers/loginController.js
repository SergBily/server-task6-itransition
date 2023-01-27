import { loginService } from "../services/loginService.js";

class LoginController {
  async login(req, res, next) {
    try {
      const { name } = req.body;
      const allUsers = await loginService.login(name);
      return res.json(allUsers);
    } catch (e) {
      next(e);
    }
  }

 
}

export const loginController = new LoginController();