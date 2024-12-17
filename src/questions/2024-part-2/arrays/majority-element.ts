/**
 * https://leetcode.com/problems/majority-element/description
 * 
 * We just iterate and count the nums.
 * Then we return the element which has the majority count.
 */
function majorityElement(nums: number[]): number {
  const counts = new Map()

  for (let index = 0; index < nums.length; index++) {
    counts.set(nums[index], (counts.get(nums[index]) ?? 0) + 1)
  }

  for (const [num, count] of Array.from(counts)) {
    if (count > nums.length / 2) {
        return num
    }
  }
}

export {majorityElement}
