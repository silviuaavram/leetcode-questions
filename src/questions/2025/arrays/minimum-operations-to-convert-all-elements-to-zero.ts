/**
 * https://leetcode.com/problems/minimum-operations-to-convert-all-elements-to-zero
 */
function minOperations(nums: number[]): number {
  const stack = []
  let operations = 0

  for (const num of nums) {
    while (stack.length && stack[stack.length - 1] > num) {
      stack.pop()
    }

    if (num === 0) {
      continue
    }

    if (stack.length === 0 || stack[stack.length - 1] < num) {
      operations++
      stack.push(num)
    }
  }

  return operations
}

export {minOperations}
