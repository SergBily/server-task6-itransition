import MessageModel from "../models/messageModel.js";

class MessageService {
  async saveMessage(title, body, sender, recipient) {
    return await MessageModel.create({
      title: title ? title : 'no subject',
      body,
      sender: {
        id: sender.id,
        name: sender.name
      },
      recipient: {
        id: recipient.id,
        name: recipient.name
      }
    });
  };

  async getMessages(id) {
    return await MessageModel.find({'recipient.id': id })
  };
}

export const messageService = new MessageService();