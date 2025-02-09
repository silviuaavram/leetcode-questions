/**
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string/description
 * 
 * We get the prefix sums for both 0s and 1s.
 * Then we iterate again and calculate the score.
 * Score for 0 is the actual prefix sum (number of 0s up to that index).
 * Score for 1 is the total number of 1s minus the 1s up to that index.
 */
function maxScore(s: string): number {
  const zeros = new Array(s.length)
  const ones = new Array(s.length)

  for (let index = 0; index < s.length; index++) {
    zeros[index] = (zeros[index - 1] ?? 0) + (s[index] === '0' ? 1 : 0)

    ones[index] = (ones[index - 1] ?? 0) + (s[index] === '1' ? 1 : 0)
  }

  let score = 0

  for (let index = 0; index < s.length - 1; index++) {
    score = Math.max(score, zeros[index] + ones[ones.length - 1] - ones[index])
  }

  return score
}

export {maxScore}
