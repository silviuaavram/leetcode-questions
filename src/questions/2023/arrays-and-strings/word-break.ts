/**
 * https://leetcode.com/problems/word-break
 */
function wordBreak(s: string, wordDict: string[]): boolean {
  const words = new Set(wordDict)
  const solutions: boolean[] = new Array(s.length + 1).fill(false)
  solutions[0] = true

  // we will check if the substrings up to end is covered by words.
  for (let end = 1; end <= s.length; end++) {
    // we will start with 0 up until end
    for (let start = 0; start < end; start++) {
      // covered means if we covered until start already + from start to end we have a word that covers it.
      if (solutions[start] && words.has(s.slice(start, end))) {
        // if we covered the substring until end, we will mark that down.
        solutions[end] = true

        break
      }
    }
  }

  return solutions[s.length]
}

function wordBreakInefficient(s: string, wordDict: string[]): boolean {
  const words = new Set(wordDict)

  function parseString(start: number, end: number): boolean {
    if (end > s.length) {
      return start >= s.length
    }

    const word = s.slice(start, end)

    if (words.has(word)) {
      const parsedWithWord = parseString(end, end + 1)

      if (parsedWithWord) {
        return true
      } else {
        return parseString(start, end + 1)
      }
    }

    return parseString(start, end + 1)
  }

  return parseString(0, 1)
}

export {wordBreak}
