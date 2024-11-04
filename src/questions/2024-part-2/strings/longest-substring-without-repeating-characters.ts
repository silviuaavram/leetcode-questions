/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description
 *
 * We use a sliding window that grows to the right if the next character is not in the set, 
 * or shrinks to the left until we remove that character from the set.
 */
function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set<string>()
  let result = 0

  let start = 0
  let end = 0

  while (end < s.length) {
    const char = s[end]

    if (charSet.has(char)) {
      charSet.delete(s[start++])
    } else {
      charSet.add(s[end++])

      result = Math.max(result, charSet.size)
    }
  }

  return result
}

export {lengthOfLongestSubstring}
