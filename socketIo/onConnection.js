import messageHandlers from "./handlers/messageHandlers.js"
import userHandlers from "./handlers/userHandlers.js"

export default function onConnection(io, socket) {
  userHandlers(io, socket)

  messageHandlers(io, socket)
}