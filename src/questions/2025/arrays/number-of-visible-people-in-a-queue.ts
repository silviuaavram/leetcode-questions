/**
 * https://leetcode.com/problems/number-of-visible-people-in-a-queue/description
 */
function canSeePersonsCount(heights: number[]): number[] {
  const stack = []
  const result = []

  for (let index = heights.length - 1; index >= 0; index--) {
    let personsCount = 0

    while (stack.length && heights[stack[stack.length - 1]] < heights[index]) {
      personsCount++

      stack.pop()
    }

    result[index] = personsCount + (stack.length ? 1 : 0)

    stack.push(index)
  }

  result[heights.length - 1] = 0

  return result
}

export {canSeePersonsCount}
