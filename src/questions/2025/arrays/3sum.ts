/**
 * https://leetcode.com/problems/3sum/description
 */
function threeSum(nums: number[]): number[][] {
  const resultSet = new Set()
  const result = []

  const sortedNums = [...nums].sort((a, b) => a - b)

  for (let index = 0; index < sortedNums.length; index++) {
    let start = index + 1
    let end = sortedNums.length - 1

    while (start < end) {
      const sum = sortedNums[index] + sortedNums[start] + sortedNums[end]

      if (sum === 0) {
        const possibleSolution = [
          sortedNums[index],
          sortedNums[start],
          sortedNums[end],
        ]
        const possibleSolutionHash = possibleSolution.join(':')

        if (!resultSet.has(possibleSolutionHash)) {
          result.push(possibleSolution)
          resultSet.add(possibleSolutionHash)
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
