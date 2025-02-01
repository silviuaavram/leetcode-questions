/**
 * https://leetcode.com/problems/valid-palindrome-iii/description
 *
 * We will check with a recursive function, and 2 indeces, starting from 0 and length - 1.
 * Every time the chars are equal, we try the next ones.
 * If they are not equal, we try either removing one or the other.
 * We use memoisation to prevent duplicate checks.
 * Each time we had to remove a char, we return a result where we add 1.
 * Once we have a result for a start,end combination, we add it to a matrix to return it if we need to check that combination again.
 * That result is the minimum between removing left or right, since that's the better path to be under k.
 */
function isValidPalindrome(s: string, k: number): boolean {
  const palindromes = []

  for (let index = 0; index < s.length; index++) {
    palindromes.push(new Array(s.length).fill(undefined))
  }

  function isPalindrome(start: number, end: number): number {
    if (start >= end) {
      return 0
    }

    if (palindromes[start][end] !== undefined) {
      return palindromes[start][end]
    }

    if (s[start] === s[end]) {
      const result = isPalindrome(start + 1, end - 1)

      palindromes[start][end] = result

      return result
    }

    const resultWithoutRight = isPalindrome(start, end - 1)
    const resultWithoutLeft = isPalindrome(start + 1, end)
    const result = 1 + Math.min(resultWithoutLeft, resultWithoutRight)

    palindromes[start][end] = result

    return result
  }

  return isPalindrome(0, s.length - 1) <= k
}

export {isValidPalindrome}
