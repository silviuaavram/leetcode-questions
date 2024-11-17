/**
 * https://leetcode.com/problems/longest-palindromic-substring/description
 *
 * There are many edge cases to watch for.
 * We will cover them by looping through the string and check for palindrome starting at a character.
 * If the adjacent character is the same, we check for palindrome starting with both characters.
 */

function longestPalindrome(s: string): string {
  let palindrome = s[0]

  function updatePalindrome(start: number, end: number) {
    if (palindrome.length < end - start + 1) {
      palindrome = s.slice(start, end + 1)
    }
  }

  function checkPalindrome(start: number, end: number): void {
    if (start < 0 || end === s.length) {
      return
    }

    if (s[start] === s[end]) {
      updatePalindrome(start, end)

      checkPalindrome(start - 1, end + 1)
    }
  }

  for (let index = 0; index < s.length; index++) {
    checkPalindrome(index - 1, index + 1)

    if (s[index] === s[index + 1]) {
      updatePalindrome(index, index + 1)
      checkPalindrome(index - 1, index + 2)
    }
  }

  return palindrome
}

export {longestPalindrome}
