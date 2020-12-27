import express, { Request, Response } from 'express'
import path from 'path'
import https from 'https'
import http from 'http'
import Debug from 'debug'

import { NODE_ENV, STATIC_PORT } from '../keys'

const debug = Debug('static')

interface StaticStart {
  serverRoot: string
  tlsConfig: { cert: Buffer; key: Buffer }
}

function start({ serverRoot, tlsConfig }: StaticStart): void {
  const app = express()
  const clientPackage =
    NODE_ENV === 'production'
      ? './dist/index.html'
      : '../../client/public/index.html'

  // app.use(helmet())
  app.use(express.static('../client'))

  /* eslint-disable no-console */
  console.log('=================')
  console.log(serverRoot)
  console.log(clientPackage)
  /* eslint-enable */

  app.get('/', (req: Request, res: Response) => {
    debug(req)
    res.sendFile(path.join(serverRoot, clientPackage))
  })

  const staticServer =
    NODE_ENV === 'production'
      ? https.createServer(tlsConfig, app)
      : http.createServer({}, app)

  staticServer.listen(STATIC_PORT, () => {
    debug(`Server running on port ${STATIC_PORT}`)
  })
}

export default start
