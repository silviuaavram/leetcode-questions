export function longestPalindrome(s: string): string {
  if (s.length < 2) {
    return s
  }

  let longestPalindrome = ''

  function checkPalindrome(start: number, end: number, size: number): void {
    if (s.charAt(start) !== s.charAt(end)) {
      // and if not worth searching because size
      return
    }

    if (longestPalindrome.length < size) {
      longestPalindrome = s.slice(start, end + 1)
    }

    if (start > 0 && end < s.length - 1) {
      checkPalindrome(start - 1, end + 1, size + 2)
    }
  }

  for (let index = 0; index < s.length; index++) {
    checkPalindrome(index, index, 1)

    if (index === 0) {
      continue
    }

    if (s.charAt(index - 1) === s.charAt(index)) {
      checkPalindrome(index - 1, index, 2)
    }
  }

  return longestPalindrome
}
