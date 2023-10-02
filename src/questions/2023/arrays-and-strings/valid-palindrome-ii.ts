/**
 * https://leetcode.com/problems/valid-palindrome-ii/
 */
function validPalindrome(s: string): boolean {
  if (!s.length) {
    return true
  }

  let alreadyRemoved = false

  function checkPalindrome(indexStart = 0, indexEnd = s.length - 1): boolean {
    if (indexStart >= indexEnd) {
      return true
    }

    if (s[indexStart] === s[indexEnd]) {
      return checkPalindrome(indexStart + 1, indexEnd - 1)
    }

    // if we have not removed any character,
    if (alreadyRemoved) {
      return false
    }

    // we will mark that we removed it.
    alreadyRemoved = true

    // and check the palindrome without either of the characters.
    return (
      checkPalindrome(indexStart, indexEnd - 1) ||
      checkPalindrome(indexStart + 1, indexEnd)
    )
  }

  return checkPalindrome()
}

export {validPalindrome}
