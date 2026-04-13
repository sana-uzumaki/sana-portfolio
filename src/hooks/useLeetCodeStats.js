import { useEffect, useMemo, useState } from 'react'
import { fetchLeetCodeStats } from '../lib/leetcode-client.js'

export function useLeetCodeStats(username) {
  const stableUsername = useMemo(() => (username ? String(username).trim() : ''), [username])
  const [result, setResult] = useState({ username: '', data: null })
  const [failure, setFailure] = useState({ username: '', error: null })

  useEffect(() => {
    if (!stableUsername) return

    const controller = new AbortController()

    fetchLeetCodeStats(stableUsername, { signal: controller.signal })
      .then((value) => {
        setResult({ username: stableUsername, data: value })
        setFailure({ username: stableUsername, error: null })
      })
      .catch((err) => {
        if (controller.signal.aborted) return
        setFailure({
          username: stableUsername,
          error: err instanceof Error ? err : new Error('Failed to load LeetCode stats'),
        })
      })

    return () => controller.abort()
  }, [stableUsername])

  if (!stableUsername) return { data: null, error: null, loading: false }

  const data = result.username === stableUsername ? result.data : null
  const error = failure.username === stableUsername ? failure.error : null
  const loading = !data && !error

  return { data, error, loading }
}
