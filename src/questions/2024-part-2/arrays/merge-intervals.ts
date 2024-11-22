/**
 * https://leetcode.com/problems/merge-intervals/description
 *
 * We sort the intervals by their start time.
 * Then we iterate and check 2 by 2.
 * If the second's start time is smaller or equal than the end of the first, we merge them.
 * We remove the 2 intervals, add back the merged one, and decrease index so we consider the merged interval again.
 */

function merge(intervals: number[][]): number[][] {
  const sortedIntervals = [...intervals].sort(([a], [b]) => a - b)

  for (let index = 0; index < sortedIntervals.length - 1; index++) {
    const [startA, endA] = sortedIntervals[index]
    const [startB, endB] = sortedIntervals[index + 1]

    if (startB <= endA) {
      const newInterval = [startA, Math.max(endA, endB)]

      sortedIntervals.splice(index, 2, newInterval)

      index--
    }
  }

  return sortedIntervals
}

export {merge}
