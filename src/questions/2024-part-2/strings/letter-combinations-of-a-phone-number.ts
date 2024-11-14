/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description
 */
function letterCombinations(digits: string): string[] {
  const mappings = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w',' x', 'y', 'z']],
  ])
  const chars = digits.split('')

  function parseChar(chars: string[], combinations: string[]): string[] {
    if (!chars.length) {
      return combinations
    }

    const char = chars[0]
    const newChars = chars.slice(1)
    const mapping = mappings.get(char)

    return parseChar(
      newChars,
      combinations.length ? combinations.reduce((acc, combination) => {
        for (const mappingChar of mapping) {
          acc.push(`${combination}${mappingChar}`)
        }

        return acc
      }, []) : mapping,
    )
  }

  return Array.from(new Set(parseChar(chars, [])))
}

export {letterCombinations}
