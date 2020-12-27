import https from 'https'
import http from 'http'
import WebSocket from 'ws'
import Debug from 'debug'

import {} from '../utils/ownProp'
import { NODE_ENV, WS_PORT } from '../keys'
import createActions from './game/actions'

const debug = Debug('socket')

interface SocketStart {
  tlsConfig: { cert: Buffer; key: Buffer }
}

function start({ tlsConfig }: SocketStart): void {
  const socketServer =
    NODE_ENV === 'production'
      ? https.createServer(tlsConfig)
      : http.createServer()
  const wss = new WebSocket.Server({ server: socketServer })

  wss.on('connection', (ws, req) => handleConnection(wss, ws, req))

  socketServer.listen(WS_PORT, () => {
    debug(`Websocket server running on port ${WS_PORT}`)
  })
}

function handleConnection(
  wss: WebSocket.Server,
  ws: WebSocket,
  req: http.IncomingMessage,
): void {
  const id = req.headers['sec-websocket-key'] ?? ''
  debug(`Client connects: ${id}`)

  const actions = createActions({ clients: wss.clients, currentClient: ws })

  // TS note: `message` is by default of type `WebSocket.Data`
  ws.on('message', (message: string) => {
    let action = ''
    let data

    try {
      const parsed = JSON.parse(message)
      action = parsed.action ?? ''
      data = parsed.data ?? {}
      debug('received:', action, data)
    } catch (e) {
      debug('There was an error')
      debug(e)
      return
    }

    if (
      action !== undefined &&
      Object.prototype.hasOwnProperty.call(actions, action)
    ) {
      // @ts-expect-error
      actions[action](data)
    }
  })
}

export default start
