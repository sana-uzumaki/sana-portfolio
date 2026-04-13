const LEETCODE_GRAPHQL_URL = 'https://leetcode.com/graphql/'

const LEETCODE_STATS_QUERY = `
  query leetcodeStats($username: String!, $year: Int!) {
    matchedUser(username: $username) {
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      userCalendar(year: $year) {
        streak
        totalActiveDays
      }
    }
  }
`

function extractSolvedCounts(acSubmissionNum) {
  const solvedByDifficulty = new Map(
    (acSubmissionNum ?? []).map((entry) => [entry?.difficulty, entry?.count]),
  )

  const totalSolved = solvedByDifficulty.get('All') ?? null
  const easySolved = solvedByDifficulty.get('Easy') ?? null
  const mediumSolved = solvedByDifficulty.get('Medium') ?? null
  const hardSolved = solvedByDifficulty.get('Hard') ?? null

  return { totalSolved, easySolved, mediumSolved, hardSolved }
}

export async function fetchLeetCodeStats({ username, year = new Date().getFullYear() }) {
  if (!username) {
    throw new Error('Missing LeetCode username')
  }

  const response = await fetch(LEETCODE_GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      origin: 'https://leetcode.com',
      referer: 'https://leetcode.com',
    },
    body: JSON.stringify({
      query: LEETCODE_STATS_QUERY,
      variables: { username, year },
    }),
  })

  if (!response.ok) {
    throw new Error(`LeetCode GraphQL request failed: ${response.status}`)
  }

  const payload = await response.json()
  if (payload?.errors?.length) {
    const message = payload.errors[0]?.message ?? 'Unknown LeetCode GraphQL error'
    throw new Error(message)
  }

  const matchedUser = payload?.data?.matchedUser
  if (!matchedUser) {
    throw new Error('LeetCode user not found')
  }

  const { totalSolved, easySolved, mediumSolved, hardSolved } = extractSolvedCounts(
    matchedUser?.submitStats?.acSubmissionNum,
  )

  return {
    username,
    year,
    totalSolved,
    easySolved,
    mediumSolved,
    hardSolved,
    streak: matchedUser?.userCalendar?.streak ?? null,
    totalActiveDays: matchedUser?.userCalendar?.totalActiveDays ?? null,
    fetchedAt: new Date().toISOString(),
  }
}

