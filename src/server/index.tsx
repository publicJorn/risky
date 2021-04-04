import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from '../app/App'

let assets: {
  client: {
    js: string
    css?: string
  }
}

// Using function works around eslint error for `@typescript-eslint/no-var-requires`
const syncLoadAssets = (): void => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST as string)
}
syncLoadAssets()

const server = express()
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR as string))
  .get('/*', (req: express.Request, res: express.Response) => {
    const context = {}
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>,
    )

    // Chrome disable shared array buffer warning: SharedArrayBuffer
    // But then needs workaround for loading sourcemaps
    // res.set('Cross-Origin-Embedder-Policy', 'require-corp')
    // res.set('Cross-Origin-Opener-Policy', 'same-origin')

    res.send(
      `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Risky</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css !== undefined
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
          ${
            process.env.NODE_ENV === 'production'
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`,
    )
  })

export default server
