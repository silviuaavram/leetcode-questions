/**
 * https://leetcode.com/problems/word-break/description
 *
 * We go through the words and check if string starts with any of them.
 * If so, we repeat the process but with the substring starting from word.length.
 * If we depleat the words for one position and had no match, we save that index in a set so we know it's not going to work.
 */
function wordBreak(s: string, wordDict: string[]): boolean {
  const notWorking = new Set()

  function matchString(start: number) {
    if (notWorking.has(start)) {
      return false
    }

    if (start === s.length) {
      return true
    }

    const remaining = s.substring(start)

    let result = false

    for (const word of wordDict) {
      if (remaining.startsWith(word)) {
        result = result || matchString(start + word.length)
      }
    }

    if (!result) {
      notWorking.add(start)
    }

    return result
  }

  return matchString(0)
}

export {wordBreak}
