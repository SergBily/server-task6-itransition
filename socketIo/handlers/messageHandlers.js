import { messageService } from "../../services/messageService.js";

export default function messageHandlers(socket) {
  socket.on('message:send', async (message) => {
    const m = await messageService.saveMessage(message);
    const recipient = message.recipient.name;
    socket.to(recipient).emit('message:receive', m)
  })
}