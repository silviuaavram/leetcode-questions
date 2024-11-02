/**
 * https://leetcode.com/problems/minimum-number-of-keypresses/description
 */

export function minimumKeypresses(s: string): number {
  const occurancesMap = new Map<string, number>()

  for (let index = 0; index < s.length; index++) {
    occurancesMap.set(s[index], (occurancesMap.get(s[index]) ?? 0) + 1)
  }

  const occurances = Array.from(occurancesMap.entries()).sort(
    ([_k1, v1], [_k2, v2]) => v2 - v1,
  )
  let keysMapped = 0
  let result = 0

  for (const [_char, occurance] of occurances) {
    const timesToPress = keysMapped < 9 ? 1 : keysMapped < 18 ? 2 : 3

    result += (occurance * timesToPress)

    keysMapped++
  }

  return result
}
