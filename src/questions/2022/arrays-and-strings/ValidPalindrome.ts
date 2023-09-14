export function isPalindrome(s: string): boolean {
  const sanitizedS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  for (let index = 0; index < Math.floor(sanitizedS.length / 2); index++) {
    if (sanitizedS.charAt(index) !== sanitizedS.charAt(sanitizedS.length - 1 - index)) {
      return false
    }
  }

  return true
}
