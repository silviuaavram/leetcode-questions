/**
 * https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description
 */
export function minSteps(s: string, t: string): number {
  const sCount = new Map<string, number>()
  const tCount = new Map<string, number>()

  for (let index = 0; index < s.length; index++) {
    sCount.set(s[index], (sCount.get(s[index]) ?? 0) + 1)
    tCount.set(t[index], (tCount.get(t[index]) ?? 0) + 1)
  }

  Array.from(tCount.entries()).forEach(([char, occurancesT]) => {
    const occurancesS = sCount.get(char) ?? 0
    const difference = occurancesT - occurancesS

    tCount.set(char, Math.max(difference, 0))
  })

  return Array.from(tCount.values()).reduce((acc, value) => {
    return acc + value
  }, 0)
}
