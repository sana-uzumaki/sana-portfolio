import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fetchLeetCodeStats } from './src/server/leetcode.js'

function leetcodeApiDevPlugin() {
  const cache = new Map()
  const ttlMs = 10 * 60 * 1000

  return {
    name: 'leetcode-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/leetcode', async (req, res) => {
        if (req.method !== 'GET') {
          res.statusCode = 405
          res.end('Method not allowed')
          return
        }

        const url = new URL(req.url ?? '', 'http://localhost')
        const username = url.searchParams.get('username')
        const yearRaw = url.searchParams.get('year')
        const year = yearRaw ? Number.parseInt(yearRaw, 10) : new Date().getFullYear()

        if (!username) {
          res.statusCode = 400
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: 'Missing ?username=' }))
          return
        }

        const cacheKey = `${username}:${year}`
        const cached = cache.get(cacheKey)
        if (cached && Date.now() - cached.at < ttlMs) {
          res.statusCode = 200
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify(cached.value))
          return
        }

        try {
          const value = await fetchLeetCodeStats({ username, year })
          cache.set(cacheKey, { at: Date.now(), value })
          res.statusCode = 200
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify(value))
        } catch (error) {
          res.statusCode = 502
          res.setHeader('content-type', 'application/json')
          res.end(
            JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
          )
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    leetcodeApiDevPlugin(),
  ],
})
