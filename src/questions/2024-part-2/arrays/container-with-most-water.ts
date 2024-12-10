/**
 * https://leetcode.com/problems/container-with-most-water/description
 *
 * We use 2 pointers.
 * We start at both ends, calculate the volume, update the result.
 * We move either start or end depending which one is the highest, as we want to keep the highest for potential bigger gains.
 */
function maxArea(height: number[]): number {
  let start = 0
  let end = height.length - 1
  let result = 0

  while (start < end) {
    const minHeight = Math.min(height[start], height[end])

    result = Math.max(result, minHeight * (end - start))

    if (height[start] < height[end]) {
      start++
    } else {
      end--
    }
  }

  return result
}

export {maxArea}
