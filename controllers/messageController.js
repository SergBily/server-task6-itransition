import { messageService } from "../services/messageService.js";

class MessageController {
  async getMessages(req, res, next) {
    try {
      const { id } = req.body;
      const messages = await messageService.getMessages(id);
      return res.json(messages);
    } catch (e) {
      next(e);
    }
  }

  async getSendedMessages(req, res, next) {
    try {
      const { id } = req.body;
      const messages = await messageService.getSendedMessages(id);
      return res.json(messages);
    } catch (e) {
      next(e);
    }
  }
}

export const messageController = new MessageController();