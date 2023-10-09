/**
 * https://leetcode.com/problems/k-closest-points-to-origin/
 */
function kClosest(points: number[][], k: number): number[][] {
  const sortedPointByDistance = Array.from(
    points
      .reduce((acc, point) => {
        const distance = Math.sqrt(
          Math.pow(point[0], 2) + Math.pow(point[1], 2),
        )
        acc.set(point, distance)

        return acc
      }, new Map())
      .entries(),
  )
    .sort(([_point1, distance1], [_point2, distance2]) => distance1 - distance2)

  return sortedPointByDistance.slice(0, k).map(pointWithDistance => pointWithDistance[0])
}

export {kClosest}
