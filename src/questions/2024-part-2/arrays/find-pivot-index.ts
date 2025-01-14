/**
 * https://leetcode.com/problems/find-pivot-index/description
 * 
 * We get the prefix sum array for nums the we iterate through it.
 * Sum to the left, for any index, is the sum at previous index, or 0.
 * Sum to the right is subtracting the sum at next index from sum at last index.
 * If sums are equal, then index is result
 */
function pivotIndex(nums: number[]): number {
  const sums = nums.reduce((acc, num, index) => {
    if (index) {
      acc.push(acc[acc.length - 1] + num)
    } else {
      acc.push(num)
    }

    return acc
  }, [])

  for (let index = 0; index < sums.length; index++) {
    const leftSum = sums[index - 1] ?? 0
    const rightSum = sums[sums.length - 1] - sums[index]

    if (leftSum === rightSum) {
      return index
    }
  }

  return -1
}

export {pivotIndex}
