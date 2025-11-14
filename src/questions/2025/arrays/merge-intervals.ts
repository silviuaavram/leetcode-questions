/**
 * https://leetcode.com/problems/merge-intervals/description
 */
function merge(intervals: number[][]): number[][] {
  const sortedIntervals = [...intervals].sort(([s1], [s2]) => s1 - s2)

  for (let index = 0; index < sortedIntervals.length - 1; index++) {
    const [s1, e1] = sortedIntervals[index]
    const [s2, e2] = sortedIntervals[index + 1]

    if (e1 >= s2) {
      const m1 = s1
      const m2 = Math.max(e1, e2)

      sortedIntervals.splice(index, 2, [m1, m2])
      index--
    }
  }

  return sortedIntervals
}

export {merge}
