/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description
 */
function removeDuplicates(nums: number[]): number {
    const set = new Set()
    const sortedNums = []

    for (let index = 0; index < nums.length; index++) {
      if (set.has(nums[index])) {
        continue
      }

      set.add(nums[index])
      sortedNums.push(nums[index])
    }

    for (let index = 0; index < sortedNums.length; index++) {
      nums[index] = sortedNums[index]
    }

    return sortedNums.length
};

export {removeDuplicates}