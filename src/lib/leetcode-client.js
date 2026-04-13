const DEFAULT_ENDPOINT = import.meta.env.VITE_LEETCODE_API_ENDPOINT ?? '/api/leetcode'
const FALLBACK_PUBLIC_ENDPOINT =
  import.meta.env.VITE_LEETCODE_FALLBACK_ENDPOINT ?? 'https://leetcode-stats-api.herokuapp.com'

function safeJsonParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

function getCacheKey(username) {
  return `leetcode-stats:v2:${username}`
}

function coerceNumber(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value)
    if (Number.isFinite(parsed)) return parsed
  }
  return null
}

export function formatNumber(value) {
  if (value === null || value === undefined) return null
  if (typeof value !== 'number' || !Number.isFinite(value)) return null
  return new Intl.NumberFormat('en-US').format(value)
}

export async function fetchLeetCodeStats(username, { endpoint = DEFAULT_ENDPOINT, signal } = {}) {
  if (!username) return null

  const cacheTtlMs = 15 * 60 * 1000
  const cacheKey = getCacheKey(username)

  const cachedRaw = globalThis?.localStorage?.getItem(cacheKey)
  const cached = cachedRaw ? safeJsonParse(cachedRaw) : null
  if (cached?.data && typeof cached?.cachedAt === 'number' && Date.now() - cached.cachedAt < cacheTtlMs) {
    return cached.data
  }

  const primaryUrl = `${endpoint}?username=${encodeURIComponent(username)}`

  const tryFetch = async (url) => {
    const response = await fetch(url, { signal })
    if (!response.ok) throw new Error(`Request failed: ${response.status}`)
    return response.json()
  }

  let data
  try {
    data = await tryFetch(primaryUrl)
  } catch {
    const fallbackUrl = `${FALLBACK_PUBLIC_ENDPOINT}/${encodeURIComponent(username)}`
    data = await tryFetch(fallbackUrl)
  }

  const normalized = {
    username,
    totalSolved: coerceNumber(data?.totalSolved),
    totalActiveDays: coerceNumber(data?.totalActiveDays ?? data?.totalActive),
    streak: coerceNumber(data?.streak ?? data?.streakCounter ?? data?.streakCount),
    fetchedAt: data?.fetchedAt ?? new Date().toISOString(),
  }

  if (globalThis?.localStorage) {
    globalThis.localStorage.setItem(cacheKey, JSON.stringify({ cachedAt: Date.now(), data: normalized }))
  }

  return normalized
}
