/**
 * https://leetcode.com/problems/subarray-product-less-than-k/description
 * 
 * We use a sliding window to increase or decrease the product.
 * We slide until the end.
 * If we moved the start beyond end, we increment end and restart product.
 * We multiply current product with last element from window.
 * If less than k, we add to the result the number of subarrays, and increase end.
 * For instance, for [1, 2, 3], we add 3: [1, 2, 3], [2, 3], [3].
 * We added [1, 2] and [2] when we previously considered [1,2], and [1] when we previously considered [1].
 * If greater than k, we increase start, and divide product by nums[start].
 * We also divide by nums[end] because we will be multiplying it back on the next iteration.
 */
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let result = 0
  let start = 0
  let end = 0
  let product = 1

  while (end < nums.length) {
    if (end < start) {

      product = 1
      end++

      continue
    }

    product *= nums[end]

    if (product < k) {
      result += end - start + 1
      end++
    } else {
      product /= (nums[start] * nums[end])
      start++
    }
  }

  return result
}

export {numSubarrayProductLessThanK}
