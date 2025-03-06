/**
 * https://leetcode.com/problems/rotate-array/description
 * 
 * In order not to use extra space, we need to modify it in place and correctly swap the numbers.
 * The rotated array helps.
 * After rotation, we swap one by one the first k numbers.
 * Then we swap one by one the remaining numbers.
 * By swapping we mean first with last, second with second to last etc.
 * [1 2 3 4 5 6 7] becomes [7 6 5 4 3 2 1] then [5 6 7 4 3 2 1] then [5 6 7 1 2 3 4].
 * Also normalize k relative to the total nums count.
 */
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  nums.reverse()

  k = k % nums.length

  for (let index = 0; index < Math.floor(k / 2); index++) {
    const aux = nums[k - index - 1]
    nums[k - index - 1] = nums[index]
    nums[index] = aux
  }

  for (let index = k; index < Math.floor((nums.length + k) / 2); index++) {
    const aux = nums[nums.length + k - index - 1]
    nums[nums.length + k - index - 1] = nums[index]
    nums[index] = aux
  }
}

export {rotate}
