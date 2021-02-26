import express from 'express'
import * as http from 'http'

// eslint-disable-next-line @typescript-eslint/no-var-requires
let app = require('./server').default

// eslint-disable-next-line prefer-const
let httpServer: http.Server

if (module.hot !== undefined) {
  module.hot.accept(['./index', './server', './server/wsServer'], (modules) => {
    console.log(`🔁  HMR Reloading \n${modules.join(', \n')}...`)
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      app = require('./server').default
      if (httpServer !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('./server/wsServer').default(httpServer)
      }
    } catch (error) {
      console.error(error)
    }
  })
  console.info('✅  Server-side HMR Enabled!')
}

const port =
  process.env.PORT !== undefined ? parseInt(process.env.PORT, 10) : 3000

const expressServer = express().use((req, res) => app.handle(req, res))

httpServer = http
  .createServer(expressServer)
  .on('error', (err: Error) => {
    console.error(err)
  })
  .listen(port, () => {
    console.log(`> Started at http://localhost:${port}`)
  })
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('./server/wsServer').default(httpServer)

export default httpServer
