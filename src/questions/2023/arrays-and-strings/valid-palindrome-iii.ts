/**
 * https://leetcode.com/problems/valid-palindrome-iii/
 */
function isValidPalindrome(s: string, k: number): boolean {
  const checks: number[][] = []

  // We will keep a matrix of results, where each value is the characters needed
  // to be removed for that point in the string to become a palindrome.
  for (let index = 0; index < s.length; index++) {
    checks.push(new Array(s.length).fill(-1))
  }

  // Without the matrix of results, we need to re-calculate the same result many times,
  // since we may have many cases of inequality, and we will branch a lot.
  function checkPalindrome(start: number, end: number): number {
    if (start === end) {
      return 0
    }

    if (start === end - 1) {
      return s[start] === s[end] ? 0 : 1
    }

    if (checks[start][end] !== -1) {
      return checks[start][end]
    }

    // If not equal, add 1 and branch out, by removing either start or end character.
    if (s[start] !== s[end]) {
      checks[start][end] =
        1 +
        Math.min(
          checkPalindrome(start + 1, end),
          checkPalindrome(start, end - 1),
        )
    } else {
      checks[start][end] = checkPalindrome(start + 1, end - 1)
    }

    return checks[start][end]
  }

  const result = checkPalindrome(0, s.length - 1)

  return result <= k
}

export {isValidPalindrome}
