import { fetchLeetCodeStats } from '../src/server/leetcode.js'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=86400')

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const username = req.query?.username
  const yearRaw = req.query?.year
  const year = yearRaw ? Number.parseInt(String(yearRaw), 10) : new Date().getFullYear()

  if (!username) {
    res.status(400).json({ error: 'Missing ?username=' })
    return
  }

  try {
    const stats = await fetchLeetCodeStats({ username, year })
    res.status(200).json(stats)
  } catch (error) {
    res.status(502).json({ error: error instanceof Error ? error.message : 'Unknown error' })
  }
}
