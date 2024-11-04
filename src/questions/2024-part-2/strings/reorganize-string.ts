/**
 * https://leetcode.com/problems/reorganize-string/description
 *
 * We will count the chars and fill the new string in 2 passes, one with even indeces, another with odd indeces.
 * We will fill in the order of occurance. And we will increment the index to place the char by 2. Once at the
 * end we will restart it from 1. We also check if the occurance for a char is greater than the half size of
 * the string, it means it won't be able to be filled accordingly.
 */
function reorganizeString(s: string): string {
  const chars = new Map<string, number>()
  const result = new Array(s.length).fill(undefined)

  for (let index = 0; index < s.length; index++) {
    const char = s[index]
    chars.set(char, (chars.get(char) ?? 0) + 1)
  }

  const sortedChars = Array.from(chars.entries()).sort(([, a], [, b]) => b - a)
  let indexToPlace = 0

  for (const [char, occurance] of sortedChars) {
    if (occurance > Math.round(s.length / 2)) {
      return ''
    }

    for (let index = 0; index < occurance; index++) {
      if (indexToPlace >= s.length) {
        indexToPlace = 1
      }

      result[indexToPlace] = char
      indexToPlace += 2
    }
  }

  return result.join('')
}

export {reorganizeString}
