/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */
function letterCombinations(digits: string): string[] {
  const lettersMap = new Map<string, string[]>([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
  ])
  let stringsSoFar: string[] = []

  for (let index = 0; index < digits.length; index++) {
    const newDigits = lettersMap.get(digits[index])

    if (!stringsSoFar.length) {
      stringsSoFar.push(...newDigits)
    } else {
      const newStringsSoFar: string[] = []
      for (const string of stringsSoFar) {
        for (const digit of newDigits) {
          newStringsSoFar.push(`${string}${digit}`)
        }
      }

      stringsSoFar = newStringsSoFar
    }
  }

  return stringsSoFar
}

export {letterCombinations}
