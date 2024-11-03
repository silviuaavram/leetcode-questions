/**
 * https://leetcode.com/problems/merge-sorted-array/description
 *
 * Start filling nums1 backwards. Each time we select either from nums1 or nums2.
 * Selection starts from m-1 or n-1, last elements of nums1 and nums2.
 * If we select from one of the arrays, we decrease its index.
 * If one of the indeces is out of bounds, we select from the other array automatically.
 *
 * Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index1 = m - 1
  let index2 = n - 1

  for (let index3 = m + n - 1; index3 >= 0; index3--) {
    if (index2 < 0 || (index1 >= 0 && nums1[index1] > nums2[index2])) {
      nums1[index3] = nums1[index1]
      index1--
    } else {
      nums1[index3] = nums2[index2]
      index2--
    }
  }
}

export {merge}
