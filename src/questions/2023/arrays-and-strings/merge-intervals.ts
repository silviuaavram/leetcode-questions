/**
 * https://leetcode.com/problems/merge-intervals/
 */
function merge(intervals: number[][]): number[][] {
  // sort the intervals, so that if we cannot merge one interval and the next one, we can be sure we cannot merge the interval and the next-next one.
  const sortedIntervals = [...intervals].sort(
    ([start1], [start2]) => start1 - start2,
  )

  for (let index = 0; index < sortedIntervals.length - 1; index++) {
    const [start1, end1] = sortedIntervals[index]
    const [start2, end2] = sortedIntervals[index + 1]

    // we merge if the start of the second overlaps with end of the first.
    if (start2 <= end1) {
      // the resulting end is the bigger one from each interval
      sortedIntervals.splice(index, 2, [start1, Math.max(end1, end2)])

      // we want to try to merge the new merged interval with the next one.
      index--
    }
  }

  return sortedIntervals
}

export {merge}
