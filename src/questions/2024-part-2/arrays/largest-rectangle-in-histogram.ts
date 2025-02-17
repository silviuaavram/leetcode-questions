/**
 * https://leetcode.com/problems/largest-rectangle-in-histogram/description
 *
 * We use an increasing monotonic stack, and we iterate through the heights.
 * We save both value and index when we push to the stack.
 * For each height, we go through the stack.
 * We update the result as max between this height, the previous result, and the rectangle we can do with the height on the stack.
 * If the height on the stack is larger or equal, it makes no sense to keep it, so we pop it.
 * But we also keep its previous index saved, because when we add the current height to the stack, we will use this index.
 * If the height on the stack is smaller, we just do the calculation, we don't pop anything.
 * Then we push and keep iterating.
 * The index update makes sense because when we discard larger height from the stack, we still "consider" it, but with this current height value.
 *
 */
function largestRectangleArea(heights: number[]): number {
  const heightStack: {val: number; index: number}[] = []
  let result = heights[0]

  for (let index = 0; index < heights.length; index++) {
    const height = heights[index]

    const stackSize = heightStack.length
    let indexToSet = index

    for (let stackIndex = stackSize - 1; stackIndex >= 0; stackIndex--) {
      const currentHeight = heightStack[stackIndex]

      result = Math.max(
        result,
        (index - currentHeight.index + 1) * Math.min(height, currentHeight.val),
        height,
      )

      if (height <= currentHeight.val) {
        indexToSet = currentHeight.index
        heightStack.pop()
      }
    }

    heightStack.push({val: height, index: indexToSet})
  }

  return result
}

export {largestRectangleArea}
