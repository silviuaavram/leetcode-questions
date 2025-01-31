/**
 * https://leetcode.com/problems/missing-ranges/description
 *
 * We create a function that generates a range between start and end.
 * It won't generate a range if start is not less than end - 1.
 * For instance, it won't generate for [1,2] [1,1] [2,1].
 * Then we iterate and we apply it 2 by 2, including lower and upper when we are on the outskirts.
 * It's actually lower - 1 and upper + 1 to simulate that they are real numbers in the array.
 */
function findMissingRanges(
  nums: number[],
  lower: number,
  upper: number,
): number[][] {
  if (!nums.length) {
    return [[lower, upper]]
  }

  const result = []

  function getRange(start: number, end: number): number[] | null {
    if (start >= end - 1) {
      return null
    }

    return [start + 1, end - 1]
  }

  for (let index = 0; index <= nums.length; index++) {
    const start = nums[index - 1] ?? lower - 1
    const end = nums[index] ?? upper + 1

    const range = getRange(start, end)

    if (range !== null) {
      result.push(range)
    }
  }

  return result
}

export {findMissingRanges}
