/**
 * https://leetcode.com/problems/construct-k-palindrome-strings/description
 *
 * If the string length is smaller than k, we clearly can't create that many palindromes.
 * The idea is that when building palindromes, we can use an optional odd char, flanked by as many even chars as we want.
 * Using this idea, we count the chars and check how many odd chars we have in total.
 * If we have more than k, we can't split the odd chars between the k palindromes, so it's false.
 * Otherwise, it's true.
 */

function canConstruct(s: string, k: number): boolean {
  if (s.length < k) {
    return false
  }

  const chars = s.split('')
  const charSet = new Set()

  for (const char of chars) {
    if (charSet.has(char)) {
      charSet.delete(char)
    } else {
      charSet.add(char)
    }
  }

  return charSet.size <= k
}

export {canConstruct}
