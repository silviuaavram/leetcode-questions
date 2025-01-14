/**
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/description
 * 
 * We leverage the set equivalents from the arrays.
 * Then we get the different items by using the set quick lookup.
 */
function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  const result1 = Array.from(set1).filter(num1 => !set2.has(num1))
  const result2 = Array.from(set2).filter(num2 => !set1.has(num2))

  return [result1, result2]
}

export {findDifference}
