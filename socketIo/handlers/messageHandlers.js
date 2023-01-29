export default function messageHandlers(io, socket) {
  socket.on('message:send', (message) => {
    const recipient = message.recipient.name;
    socket.to(recipient).emit('message:receive', message)
  })
}