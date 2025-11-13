/**
 * https://leetcode.com/problems/two-sum/description
 */
function twoSum(nums: number[], target: number): number[] {
    const indices = nums.map((_num, index) => index)
    const sortedNums = [...nums].sort((a, b) => a - b)
    indices.sort((a, b) => nums[a] - nums[b])

    let start = 0
    let end = nums.length - 1

    while (start < end) {
      const sum = sortedNums[start] + sortedNums[end]

      if (sum === target) {
        return [indices[start], indices[end]]
      }

      if (sum < target) {
        start++
      } else {
        end--
      }
    }

    throw new Error('should have at least one solution')
};

export {twoSum}