/**
 * https://leetcode.com/problems/trapping-rain-water/description
 * 
 * This one looks straightforward but it's not.
 * We use a monotonic decreaseing stack and the idea is the following.
 * When we find a height that's larger than the previous, it might be a case to trap water.
 * If last height is larger than current height, it's not the case, so we just push the new height.
 * When we can trap water, we pop from the stack as much as we can, until empty or we find a height that' at least as big as current one.
 * If stack becomes empty when trying to hold water, we exit because there's no left side height to hold water.
 * This stack contains the original indeces for the heights.
 * When we pop a height, we add water according to the formula:
 * (minimum height between current height and the last height from the stack) * (the difference between current index and last height from the stack index, -1).
 */
function trap(height: number[]): number {
  let result = 0
  const indeces: number[] = []

  for (let index = 0; index < height.length; index++) {
    while (
      indeces.length &&
      height[index] > height[indeces[indeces.length - 1]]
    ) {
      const poppedIndex = indeces.pop()

      if (!indeces.length) {
        break
      }

      const minSideHeight = Math.min(
        height[index],
        height[indeces[indeces.length - 1]],
      )
      result +=
        (minSideHeight - height[poppedIndex]) *
        (index - indeces[indeces.length - 1] - 1)
    }

    indeces.push(index)
  }

  return result
}

export {trap}
