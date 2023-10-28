/**
 * https://leetcode.com/problems/interval-list-intersections/
 */
function intervalIntersection(
  firstList: number[][],
  secondList: number[][],
): number[][] {
  const result: number[][] = []
  let index1 = 0
  let index2 = 0

  while (index1 < firstList.length && index2 < secondList.length) {
    const [start1, end1] = firstList[index1]
    const [start2, end2] = secondList[index2]

    if (start1 > end2) {
      index2++

      continue
    }

    if (end1 < start2) {
      index1++

      continue
    }

    const intersection = [Math.max(start1, start2), Math.min(end1, end2)]
    result.push(intersection)

    if (end1 >= end2) {
      index2++
    }
    if (end1 <= end2) {
      index1++
    }
  }

  return result
}

export {intervalIntersection}
