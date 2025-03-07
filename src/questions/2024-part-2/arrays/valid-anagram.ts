/**
 * https://leetcode.com/problems/valid-anagram/description
 *
 * We count each char's occurance in each of the string.
 * Then we compare and return false if at least one occurance does not match.
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const charsS = new Map<string, number>()
  const charsT = new Map<string, number>()

  for (let index = 0; index < s.length; index++) {
    charsS.set(s[index], (charsS.get(s[index]) ?? 0) + 1)
    charsT.set(t[index], (charsT.get(t[index]) ?? 0) + 1)
  }

  for (const [char, occurances] of Array.from(charsS.entries())) {
    if (charsT.get(char) === null || charsT.get(char) !== occurances) {
      return false
    }
  }

  return true
}

export {isAnagram}
