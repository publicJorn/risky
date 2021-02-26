import ws from 'ws'
import * as http from 'http'

export default (server: http.Server): void => {
  const wsServer = new ws.Server({ server })

  wsServer.on('connection', (socket) => {
    socket.on('message', (message) => console.log(message))
  })
}
