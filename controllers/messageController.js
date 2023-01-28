import { messageService } from "../services/messageService.js";

class MessageController {
  async saveMessage(req, res, next) {
    try {
      const { title, body, sender, recipient } = req.body;
      const message = await messageService.saveMessage(title, body, sender, recipient)
      return res.json(message);
    } catch (e) {
      next(e);
    }
  }

  async getMessages(req, res, next) {
    try {
      const { id } = req.body;
      const messages = await messageService.getMessages(id);
      return res.json(messages);
    } catch (e) {
      next(e);
    }
  }
}

export const messageController = new MessageController();