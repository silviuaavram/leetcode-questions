/**
 * https://leetcode.com/problems/longest-increasing-subsequence/description
 *
 * We use dynamic programming to store the max length subsequence up to one point, and use that in future solutions.
 * We use an array filled with 1, since theoretically, we can have as many 1 size LIS solutions.
 * Starting from index 1, we check the numbers before it, and if a number is less than the current number, it means it can build a subsequence.
 * We check if the subsequence already stored for that number + 1 (adding this number) is larger than the subsequence already stored at this number.
 * We then return the max value from this array.
 */
function lengthOfLIS(nums: number[]): number {
  const solutions = Array(nums.length).fill(1)

  for (let indexNumber = 1; indexNumber < nums.length; indexNumber++) {
    for (let indexCompare = 0; indexCompare < indexNumber; indexCompare++) {
      if (nums[indexNumber] > nums[indexCompare]) {
        solutions[indexNumber] = Math.max(
          solutions[indexNumber],
          solutions[indexCompare] + 1,
        )
      }
    }
  }

  return Math.max(...solutions)
}

export {lengthOfLIS}
