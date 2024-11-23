/**
 * https://leetcode.com/problems/product-of-array-except-self/description
 * 
 * Calculate the prefix and suffix products, but on the first position we add 1.
 * On each index it's the product until that position, without including the number.
 * The result for each index is multiplying the prefix and suffix on that index.
 */
function productExceptSelf(nums: number[]): number[] {
  const prefixProducts = [1]
  const suffixProducts = [1]

  for (let index = 0; index < nums.length - 1; index++) {
    prefixProducts.push(nums[index] * prefixProducts[index])
    suffixProducts.unshift(nums[nums.length - 1 - index] * suffixProducts[0])
  }

  const results = []

  for (let index = 0; index < nums.length; index++) {
    results.push(prefixProducts[index] * suffixProducts[index])
  }

  return results.map(result => (result === -0 ? 0 : result))
}

export {productExceptSelf}
