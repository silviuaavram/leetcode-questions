/**
 * https://leetcode.com/problems/trapping-rain-water/description
 */
function trap(height: number[]): number {
  const stack = []
  let result = 0

  for (let index = 0; index < height.length; index++) {
    height[index]

    while (stack.length && height[index] > height[stack[stack.length - 1]]) {
      const lastPopped = stack.pop()

      if (!stack.length) {
        break
      }

      const sideHeight = Math.min(
        height[stack[stack.length - 1]],
        height[index],
      )
      result +=
        (sideHeight - height[lastPopped]) *
        (index - stack[stack.length - 1] - 1)
    }

    stack.push(index)
  }

  return result
}

export {trap}
