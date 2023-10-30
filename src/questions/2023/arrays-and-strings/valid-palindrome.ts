/**
 * https://leetcode.com/problems/valid-palindrome/
 */
function isPalindrome(s: string): boolean {
  const sanitisedS = s.replace(/[^a-zA-Z0-9+]/g, '').toLowerCase()

  for (let index = 0; index < Math.floor(sanitisedS.length / 2); index++) {
    if (sanitisedS[index] !== sanitisedS[sanitisedS.length - 1 - index]) {
      return false
    }
  }

  return true
}

export {isPalindrome}
