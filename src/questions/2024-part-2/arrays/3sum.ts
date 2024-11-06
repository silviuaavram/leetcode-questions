/**
 * https://leetcode.com/problems/3sum/description
 *
 * Fix a number x then do 2 sum on the remaining array from x to length - 1.
 * We use a set to check hashes of previous solutions, so we avoid duplicates.
 * We don't stop the 2sum problem when we find a solution, as we can find another.
 */
function threeSum(nums: number[]): number[][] {
  const result = []
  const resultsSet = new Set()
  const sortedNums = nums.sort((a, b) => a - b)

  for (let i = 0; i < sortedNums.length; i++) {
    let start = i + 1
    let end = sortedNums.length - 1

    while (start < end) {
      const sum = sortedNums[i] + sortedNums[start] + sortedNums[end]

      if (sum === 0) {
        const solution = [sortedNums[i], sortedNums[start], sortedNums[end]]
        const solutionHash = solution.join(';')

        if (!resultsSet.has(solutionHash)) {
          result.push(solution)
          resultsSet.add(solutionHash)
        }
      }

      if (sum < 0) {
        start++
      } else {
        end--
      }
    }
  }

  return result
}

export {threeSum}
