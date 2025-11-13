/**
 * https://leetcode.com/problems/majority-element/description
 */
function majorityElement(nums: number[]): number {
    const counts = new Map()

    for (const num of nums) {
      counts.set(num, (counts.get(num) ?? 0) + 1)
    }

    const majorityValue = nums.length / 2

    for (const [num, count] of Array.from(counts.entries())) {
      if (count >= majorityValue) {
        return num
      }
    }

    throw new Error('should not end here')
};

export {majorityElement}