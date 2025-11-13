/**
 * https://leetcode.com/problems/remove-element/description
 */
function removeElement(nums: number[], val: number): number {
    const differentNums = []

    for (let index = 0; index < nums.length; index++) {
      if (nums[index] !== val) {
        differentNums.push(nums[index])
      }
    }

    for (let index = 0; index < differentNums.length; index++) {
      nums[index] = differentNums[index]
      
    }

    return differentNums.length
};

export {removeElement}