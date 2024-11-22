/**
 * https://leetcode.com/problems/k-closest-points-to-origin/description
 *
 * We calculate the distances and sort the points by their distance.
 */
function kClosest(points: number[][], k: number): number[][] {
  return points
    .map(point => ({
      point,
      distance: Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2)),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, k)
    .map(p => p.point)
}

export {kClosest}
