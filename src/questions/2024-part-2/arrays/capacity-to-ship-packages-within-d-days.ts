/**
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description
 *
 * We use a binary search to get the capacity.
 * Lowest limit is the largest package.
 * Highest limit is the total weight of all packages.
 * We use a function that returns the number of days for a given capacity.
 * Given the return value of this function, we search for higher or lower capacity.
 */
function shipWithinDays(weights: number[], days: number): number {
  let start = Math.max(...weights)
  let end = weights.reduce((acc, weight) => acc + weight, 0)

  function getDays(capacity: number): number {
    let days = 1
    let cargo = 0

    for (let index = 0; index < weights.length; index++) {
      cargo += weights[index]

      if (cargo > capacity) {
        cargo = weights[index]
        days++
      }
    }

    return days
  }

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    const solution = getDays(middle)

    if (solution > days) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }

  return start
}

export {shipWithinDays}
