import { messageService } from "../services/messageService.js";

class MessageController {
  async saveMessage(req, res, next) {
    try {
      const {title, body, from, to} = req.body
      const message = await messageService.saveMessage(title, body, from, to)
      return res.json(message);
    } catch (e) {
      next(e);
    }
  }
}

export const messageController = new MessageController();