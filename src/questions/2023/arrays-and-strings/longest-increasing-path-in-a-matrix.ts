/**
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 */
function longestIncreasingPath(matrix: number[][]): number {
  const distances: number[][] = []
  let maxDistance = 0

  for (let index = 0; index < matrix.length; index++) {
    distances.push(new Array(matrix[0].length))
  }

  function processNode(x: number, y: number): number {
    if (distances[x][y] !== undefined) {
      return distances[x][y]
    }

    const distanceUp =
      x > 0 && matrix[x - 1][y] > matrix[x][y] ? processNode(x - 1, y) : 0

    const distanceLeft =
      y > 0 && matrix[x][y - 1] > matrix[x][y] ? processNode(x, y - 1) : 0

    const distanceDown =
      x < matrix.length - 1 && matrix[x + 1][y] > matrix[x][y]
        ? processNode(x + 1, y)
        : 0

    const distanceRight =
      y < matrix[0].length - 1 && matrix[x][y + 1] > matrix[x][y]
        ? processNode(x, y + 1)
        : 0

    const distance =
      1 + Math.max(distanceDown, distanceLeft, distanceRight, distanceUp)

    if (maxDistance < distance) {
      maxDistance = distance
    }

    distances[x][y] = distance

    return distance
  }

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      processNode(x, y)
    }
  }

  return maxDistance
}

export {longestIncreasingPath}
