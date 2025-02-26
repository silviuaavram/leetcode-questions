/**
 * https://leetcode.com/problems/contiguous-array/description
 * 
 * We use a count variable to save the relative number of 0s and 1s.
 * For 1, we increment, for 0 we decrement.
 * We refresh this count at every index, and if we plot its value, we will see this:
 * the array: [0 0 1 0 0 0 1 1]
 * the count: [-1 -2 -1 -2 -3 - 4 -3 -2]
 * We notice that between the indeces that have the same count, the number of 0s and 1s are equal.
 * We will use a map to store for each count value the first index it occurs at.
 * As we iterate, if we have that count in the map, we refresh the result by subtracting the indeces.
 * Otherwise, we store the count in the map, with the index as value.
 * We also need to store a 0: -1 value in the map, for this case: [0 1] or [1 0]
 */
function findMaxLength(nums: number[]): number {
  const counts = new Map<number, number>([[0, -1]])
  let count = 0
  let result = 0

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 0) {
      count--
    } else {
      count++
    }

    if (counts.has(count)) {
      result = Math.max(result, index - counts.get(count))
    } else {
      counts.set(count, index)
    }
  }

  return result
}

export {findMaxLength}
