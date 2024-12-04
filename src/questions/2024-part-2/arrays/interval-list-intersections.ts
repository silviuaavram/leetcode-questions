/**
 * https://leetcode.com/problems/interval-list-intersections/description
 */
function intervalIntersection(
  firstList: number[][],
  secondList: number[][],
): number[][] {
  const result = []
  const remainingSecondIntervals = [...secondList]

  for (let index = 0; index < firstList.length; index++) {
    const firstInterval = firstList[index]

    if (!remainingSecondIntervals.length) {
      return result
    }

    const [start1, end1] = firstInterval
    const [start2, end2] = remainingSecondIntervals[0]

    // try again with the next first interval
    if (end1 < start2) {
      continue
    }

    // try again with the next second interval
    if (end2 < start1) {
      remainingSecondIntervals.splice(0, 1)

      index--

      continue
    }

    result.push([Math.max(start1, start2), Math.min(end1, end2)])

    if (end1 > end2) {
      remainingSecondIntervals.splice(0, 1)

      index--
    } else {
      continue
    }
  }

  return result
}

export {intervalIntersection}
