/**
 * https://leetcode.com/problems/identify-the-largest-outlier-in-an-array
 * 
 * We compute the sum and the ocuurances for each number.
 * We iterate through the numbers.
 * A possible outlier is subtracting from sum twice this number (once to be the sum, once the actual sum of the remaining numbers).
 * If such an outlier exists in the map, we consider it only if it's different from current number, or if there are at least 2 such numbers.
 */
function getLargestOutlier(nums: number[]): number {
  const occurances = new Map<number, number>()
  const sum = nums.reduce((acc, num) => {
    occurances.set(num, (occurances.get(num) ?? 0) + 1)

    return acc + num
  }, 0)
  let result = -Infinity

  for (let index = 0; index < nums.length; index++) {
    const outlier = sum - nums[index] * 2

    if (
      occurances.has(outlier) &&
      occurances.get(outlier) > (outlier === nums[index] ? 1 : 0)
    ) {
      result = Math.max(result, outlier)
    }
  }

  return result
}

export {getLargestOutlier}
