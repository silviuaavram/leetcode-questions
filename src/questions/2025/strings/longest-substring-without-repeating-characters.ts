/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description
 */
function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set()
  let lastRemoved = 0
  let result = 0

  for (let index = 0; index < s.length; index++) {
    while (charSet.has(s[index])) {
      charSet.delete(s[lastRemoved++])
    }

    charSet.add(s[index])

    result = Math.max(result, charSet.size)
  }

  return result
}

export {lengthOfLongestSubstring}
