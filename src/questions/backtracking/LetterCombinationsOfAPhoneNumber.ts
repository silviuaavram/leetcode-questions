export function letterCombinations(digits: string): string[] {
  const result = []

  const letters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }

  function getCombination(acc: string, digits: string): void {
    if (!digits.length) {
      if (acc.length) {
        result.push(acc)
      }

      return
    }

    const digit = digits[0]
    const lettersForDigit = letters[digit]

    for (let i = 0; i < letters[digit].length; i++) {
      getCombination(`${acc}${lettersForDigit[i]}`, digits.slice(1))
    }
  }

  getCombination('', digits)

  return result
}
