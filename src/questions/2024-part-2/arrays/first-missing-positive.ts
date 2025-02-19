/**
 * https://leetcode.com/problems/first-missing-positive/description
 * 
 * We use the indeces of nums to store if there's that number in the array.
 * If we find 2, we mark index 1 (nums is 0 based, we are interested in counting from 1).
 * To actually mark found items, we make the number at index null.
 * This prevents us from parsing the value we overwrote, so we parse this value as well, mark it, and if we don't need to mark it, we exit.
 * We don't mark if num at index is null (already parsed), negative, or exceeds nums length.
 * Now we can iterate through nums and the first non null number's index is the missing number
 */
function firstMissingPositive(nums: number[]): number {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === null || nums[index] > nums.length || nums[index] < 1) {
      continue
    }

    let aux = nums[nums[index] - 1]
    nums[nums[index] - 1] = null

    while (aux !== null && aux <= nums.length && aux >= 1) {
      const aux2 = nums[aux - 1] 
      nums[aux - 1] = null

      aux = aux2
    }
  }

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== null) {
      return index + 1
    }
  }

  return nums.length + 1
}

export {firstMissingPositive}
