/**
 * https://leetcode.com/problems/find-k-closest-elements/
 */
function findClosestElements(arr: number[], k: number, x: number): number[] {
  const result: number[] = []

  // We try to find the number in the array, or the closest one.
  function findIndex(start: number, end: number): number {
    if (start >= end) {
      return start
    }

    const middle = Math.floor((start + end) / 2)
    const middleNumber = arr[middle]

    if (middleNumber === x) {
      return middle
    }

    // if we have 2 numbers remaining, choose the closest one.
    if (start === end - 1) {
      return Math.abs(arr[start] - x) <= Math.abs(arr[end] - x) ? start : end
    }

    // binary search but always consider the middle element, as it may be closer to anything else we find.
    if (middleNumber < x) {
      return findIndex(middle, end)
    } else if (middleNumber > x) {
      return findIndex(start, middle)
    }
  }

  const closestIndex = findIndex(0, arr.length - 1)

  let leftIndex = closestIndex
  let rightIndex = closestIndex + 1

  // now move left and right with individual indices depending which number is closer.
  for (let index = 0; index < k; index++) {
    const leftNumber = arr[leftIndex]
    const rightNumber = arr[rightIndex]

    if (
      leftNumber === undefined ||
      Math.abs(x - leftNumber) > Math.abs(x - rightNumber)
    ) {
      result.push(rightNumber)
      rightIndex++

      continue
    }

    if (
      rightNumber === undefined ||
      Math.abs(x - leftNumber) <= Math.abs(x - rightNumber)
    ) {
      result.splice(0, 0, leftNumber)
      leftIndex--

      continue
    }
  }

  return result
}

export {findClosestElements}
