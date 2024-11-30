/**
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * We remove non alphanumeric chars, lowercase the rest and split into chars.
 * Then we check char by char.
 */

function isPalindrome(s: string): boolean {
  const tokens = s
    .replace(/[^0-9a-z]/gi, '')
    .toLowerCase()
    .split('')

  for (let index = 0; index < tokens.length; index++) {
    if (tokens[index] !== tokens[tokens.length - 1 - index]) {
      return false
    }
  }

  return true
}

export {isPalindrome}
