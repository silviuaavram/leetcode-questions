/**
 * https://leetcode.com/problems/analyze-user-website-visit-pattern/description
 * 
 * It involves multiple operations to transform the input.
 * First, we combine the arrays into a single array of objects, and sort them by timestamp.
 * Then for each user we compute all the websites he visited.
 * Then from all the websites for each user we create unique tuples, and merge the tuples as strings.
 * We then remove entries such as patterns with less than 3 websites, and merge them all from all the users.
 * Then we count each pattern into a map.
 * Then we inverse the map, with count as key and patterns as values.
 * Finally we get the patterns for the highest count, sort them and return the first one.
 */

function mostVisitedPattern(
  username: string[],
  timestamp: number[],
  website: string[],
): string[] {
  const visits = username
    .reduce<{username: string; timestamp: number; website: string}[]>(
      (acc, _user, index) => [
        ...acc,
        {
          username: username[index],
          timestamp: timestamp[index],
          website: website[index],
        },
      ],
      [],
    )
    .sort((v1, v2) => v1.timestamp - v2.timestamp)

  const websites = visits.reduce<Map<string, string[]>>(
    (acc, {username, website}) => {
      if (!acc.has(username)) {
        acc.set(username, [])
      }

      acc.get(username).push(website)

      return acc
    },
    new Map(),
  )

  function getTuples(websites: string[]): string[] {
    const tuples = new Set<string>()

    for (let i = 0; i < websites.length - 2; i++) {
      for (let j = i + 1; j < websites.length - 1; j++) {
        for (let k = j + 1; k < websites.length; k++) {
          tuples.add(`${websites[i]}-${websites[j]}-${websites[k]}`)
        }
      }
    }

    return Array.from(tuples)
  }

  const tuples = Array.from(websites.values())
    .map(websites => getTuples(websites))
    .reduce((acc, tuples) => {
      return [...acc, ...tuples]
    }, [])

  const patterns = tuples.reduce((acc, tuple) => {
    acc.set(tuple, (acc.get(tuple) ?? 0) + 1)

    return acc
  }, new Map<string, number>())

  let maxOccurances = 0

  const results = Array.from(patterns.entries()).reduce<Map<number, string[]>>(
    (acc, [string, occurances]) => {
      if (!acc.has(occurances)) {
        acc.set(occurances, [])
      }

      acc.get(occurances).push(string)

      maxOccurances = Math.max(maxOccurances, occurances)

      return acc
    },
    new Map(),
  )

  const result = results.get(maxOccurances)

  return result.sort()[0].split('-')
}

export {mostVisitedPattern}
