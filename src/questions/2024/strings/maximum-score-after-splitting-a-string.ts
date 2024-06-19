/**
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/
 */

export function maxScore(s: string): number {
  const counts: number[][] = []

  for (let index = 0; index < s.length; index++) {
    let zeros = 0
    let ones = 0

    if (index !== 0) {
      zeros += counts[index - 1][0]
      ones += counts[index - 1][1]
    }

    if (s[index] === '0') {
      zeros++
    } else {
      ones++
    }

    counts.push([zeros, ones])
  }

  let result = 0

  for (let index = 1; index < s.length; index++) {
    const zerosToTheLeft = counts[index - 1][0]
    const onesToTheRight = counts[counts.length - 1][1] - counts[index - 1][1]
    const possibleResult = zerosToTheLeft + onesToTheRight

    if (result < possibleResult) {
      result = possibleResult
    }
  }

  return result
}
