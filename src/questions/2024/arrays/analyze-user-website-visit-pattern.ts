/**
 * https://leetcode.com/problems/analyze-user-website-visit-pattern/description/
 */
export function mostVisitedPattern(
  username: string[],
  timestamp: number[],
  website: string[],
): string[] {
  const tuples = username.reduce<
    {username: string; timestamp: number; website: string}[]
  >(
    (acc, username, index) => [
      ...acc,
      {
        username,
        timestamp: timestamp[index],
        website: website[index],
      },
    ],
    [],
  )

  tuples.sort((t1, t2) => t1.timestamp - t2.timestamp)

  const visits = tuples.reduce((acc, {username, website}) => {
    if (!acc.has(username)) {
      acc.set(username, [])
    }

    acc.get(username).push(website)

    return acc
  }, new Map<string, string[]>())

  const patterns = Array.from(visits.values()).reduce((acc, websites) => {
    const alreadyAdded = new Set()
    for (let i = 0; i < websites.length; i++) {
      for (let j = i + 1; j < websites.length; j++) {
        for (let k = j + 1; k < websites.length; k++) {
          const pattern = `${websites[i]}-${websites[j]}-${websites[k]}`

          if (alreadyAdded.has(pattern)) {
            continue
          }

          alreadyAdded.add(pattern)
          acc.set(pattern, (acc.get(pattern) ?? 0) + 1)
        }
      }
    }

    return acc
  }, new Map<string, number>())

  return Array.from(patterns.entries())
    .sort(([p1], [p2]) => (p1 < p2 ? -1 : p1 === p2 ? 0 : 1))
    .reduce<{pattern: string; occurance: number}>(
      (acc, [pattern, occurance]) => {
        if (acc.occurance < occurance) {
          return {pattern, occurance}
        }

        return acc
      },
      {occurance: 0, pattern: ''},
    )
    .pattern.split('-')
}
