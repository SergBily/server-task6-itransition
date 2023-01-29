import MessageModel from "../models/messageModel.js";

class MessageService {
  async saveMessage(message) {
    return await MessageModel.create({
      title: message.title ? message.title : 'no subject',
      body: message.body,
      sender: {
        id: message.sender.id,
        name: message.sender.name
      },
      recipient: {
        id: message.recipient.id,
        name: message.recipient.name
      }
    });
  };

  async getMessages(id) {
    return await MessageModel.find({'recipient.id': id })
  };

  async getSendedMessages(id) {
    return await MessageModel.find({'sender.id': id })
  };
}

export const messageService = new MessageService();