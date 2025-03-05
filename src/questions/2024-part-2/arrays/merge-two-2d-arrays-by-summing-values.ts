/**
 * https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/description
 * 
 * We merge values in a key-value map.
 * We also keep a sorted keys array, so we pick them in order when we return the result.
 */
function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const keys: number[] = []
  const nums = new Map<number, number>()
  let index1 = 0
  let index2 = 0

  while (index1 < nums1.length || index2 < nums2.length) {
    const [key, value] =
      index1 === nums1.length ||
      (index2 < nums2.length && nums1[index1][0] > nums2[index2][0])
        ? nums2[index2++]
        : nums1[index1++]

    if (nums.has(key)) {
      nums.set(key, nums.get(key) + value)
    } else {
      nums.set(key, value)
      keys.push(key)
    }
  }

  return keys.map(key => [key, nums.get(key)])
}

export {mergeArrays}
