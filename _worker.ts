// Don't edit this file.

import type { Handler } from 'hono'

import app from './src/index'

const serveStatic = (): Handler => {
  return async (c) => {
    const env = c.env as { ASSETS: Fetcher }
    const res = await env.ASSETS.fetch(c.req.raw)
    if (res.status === 404) {
      return c.notFound()
    }
    return res
  }
}

app.get('/favicon.ico', serveStatic())
app.get('/static/*', serveStatic())

export default app
