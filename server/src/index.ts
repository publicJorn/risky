import fs from 'fs'

import staticServer from './static/staticServer'
import socketServer from './socket/socketServer'

const serverRoot = __dirname
const tlsConfig = {
  cert: fs.readFileSync(`${__dirname}/../../../risky_cert/cert.pem`),
  key: fs.readFileSync(`${__dirname}/../../../risky_cert/key.pem`),
}

staticServer({ serverRoot, tlsConfig })
socketServer({ tlsConfig })
