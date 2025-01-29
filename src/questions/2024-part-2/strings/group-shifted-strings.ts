/**
 * https://leetcode.com/problems/group-shifted-strings/description
 * 
 * For each string, we generate its normalized index version.
 * For example, abc has 012.
 * While def has 345, normalized to 3 is also 012.
 * So is zab, normalized to 25, is 0-25-24, but for negatives, we add 26, so it's 012.
 * We group all strings based on their normalized version, and return the groups.
 */
/**
 * @param {string[]} strings
 * @return {string[][]}
 */
function groupStrings(strings: string[]) {
  const groupedStrings = new Map<string, string[]>()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  function getCommonString(string: string) {
    const chars = string.split('')
    const indeces = chars.map(char => alphabet.indexOf(char))
    const firstIndex = indeces[0]
    const normalisedIndeces = indeces.map((idx, index) => {
      if (index === 0) {
        return 0
      }

      const result = idx - firstIndex

      if (result < 0) {
        return result + alphabet.length
      }

      return result
    })

    return normalisedIndeces.join('-')
  }

  for (const string of strings) {
    const key = getCommonString(string)

    if (!groupedStrings.has(key)) {
      groupedStrings.set(key, [])
    }

    groupedStrings.get(key).push(string)
  }

  return Array.from(groupedStrings.values())
}

export {groupStrings}
