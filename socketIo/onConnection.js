import messageHandlers from "./handlers/messageHandlers.js"
import userHandlers from "./handlers/userHandlers.js"

export default function onConnection(socket) {
  userHandlers(socket)

  messageHandlers(socket)
}