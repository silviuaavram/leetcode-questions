/**
 * https://leetcode.com/problems/merge-sorted-array/
 *
 * Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const aux: number[] = []

	// always try to make a selection between nums1[index], aux[0] and nums2[0].
	// do not select from aux[0] if empty.
	// do not select from nums2[0] if empty.
	// if we use from aux[0] or nums2[0] to replace the number in nums1[index], store that number by pushing it in aux.
	// if we arrived at index m and above, don't compare with nums1[index] anymore since that's a 0 placeholder.
  for (let index = 0; index < nums1.length; index++) {
    if (aux.length) {
      if (index >= m) {
        if (!nums2.length || aux[0] <= nums2[0]) {
          nums1[index] = aux.splice(0, 1)[0]
        } else {
          nums1[index] = nums2.splice(0, 1)[0]
        }
      } else if (aux[0] < nums1[index]) {
        aux.push(nums1[index])

        if (!nums2.length || aux[0] <= nums2[0]) {
          nums1[index] = aux.splice(0, 1)[0]
        } else {
          nums1[index] = nums2.splice(0, 1)[0]
        }
      } else if (nums2[0] < nums1[index]) {
        aux.push(nums1[index])
        nums1[index] = nums2.splice(0, 1)[0]
      }
    } else {
      if (nums2.length) {
        if (index >= m) {
          nums1[index] = nums2.splice(0, 1)[0]
        } else if (nums2[0] < nums1[index]) {
          aux.push(nums1[index])
          nums1[index] = nums2.splice(0, 1)[0]
        }
      }
    }
    // console.log(nums1, aux, nums2)
  }
}

export {merge}
