/**
 * https://leetcode.com/problems/rearrange-array-elements-by-sign/description
 * 
 * We can have two arrays, each for positive and negative, and compute the answer by getting one element from each.
 * However, the solution below uses 2 pointers, one for future positive and one for future negative in the answer array.
 * As we iterate through nums, we add each number in the answer array on either index, depending on the sign.
 */
function rearrangeArray(nums: number[]): number[] {
  let indexPos = 0
  let indexNeg = 1
  const ans = new Array(nums.length)

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] < 0) {
      ans[indexNeg] = nums[index]
      indexNeg += 2
    } else {
      ans[indexPos] = nums[index]
      indexPos += 2
    }
  }

  return ans
}

export {rearrangeArray}
