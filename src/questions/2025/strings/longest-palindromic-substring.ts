/**
 * https://leetcode.com/problems/longest-palindromic-substring/description
 */
function longestPalindrome(s: string): string {
  let result = ''

  function findPalindrome(start: number, end: number) {
    if (start >= 0 && end < s.length && s[start] === s[end]) {
      if (end - start + 1 > result.length) {
        result = s.substring(start, end + 1)
      }

      findPalindrome(start - 1, end + 1)
    }
  }

  for (let index = 0; index < s.length; index++) {
    findPalindrome(index, index)
    findPalindrome(index, index + 1)
  }

  return result
}

export {longestPalindrome}
