import MessageModel from "../models/messageModel.js";

class MessageService {
  async saveMessage(title, body, from, to) {
    return await MessageModel.create({
      title: title ? title : 'no subject',
      body,
      from,
      to
    });
  };
}

export const messageService = new MessageService();