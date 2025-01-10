/**
 * https://leetcode.com/problems/unique-paths-ii/description
 *
 * We use a parallel matrix to keep track of the number of paths reachable from any position.
 * If there's already a number of paths added to a position, we don't need to check that position anymore, we just use its saved result.
 * The number of paths for any position is the number of paths from the position down + from the position to the right.
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const height = obstacleGrid.length
  const width = obstacleGrid[0].length
  const paths = []

  for (let index = 0; index < height; index++) {
    paths.push(new Array(width).fill(undefined))
  }

  function move(x: number, y: number): number {
    if (x === height || y === width) {
      return 0
    }

    if (obstacleGrid[x][y] === 1) {
      paths[x][y] = 0

      return 0
    }

    if (paths[x][y] !== undefined) {
      return paths[x][y]
    }

    if (x === height - 1 && y === width - 1) {
      paths[x][y] = 1

      return 1
    }

    const resultDown = move(x + 1, y)
    const resultRight = move(x, y + 1)

    paths[x][y] = resultDown + resultRight

    return paths[x][y]
  }

  move(0, 0)

  return paths[0][0]
}

export {uniquePathsWithObstacles}
