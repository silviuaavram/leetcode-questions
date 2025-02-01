/**
 * https://leetcode.com/problems/palindromic-substrings/description
 *
 * We know for sure each single character is a palindrome.
 * Then we interate and check palindromes starting from adjacent characters, and also with 3 characters.
 * In the checking function, if we find a palindrome, we increment the result and move forward with the indeces.
 */

function countSubstrings(s: string): number {
  let result = s.length

  function checkPalindrome(start: number, end: number) {
    if (start < 0 || end === s.length || s[start] !== s[end]) {
      return
    }

    result++

    checkPalindrome(start - 1, end + 1)
  }

  for (let index = 0; index < s.length - 1; index++) {
    checkPalindrome(index, index + 1)

    if (index > 0) {
      checkPalindrome(index - 1, index + 1)
    }
  }

  return result
}

export {countSubstrings}
