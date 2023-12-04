/**
 * https://leetcode.com/problems/max-area-of-island/
 */
function maxAreaOfIsland(grid: number[][]): number {
  let maxSize = 0
  const visited: boolean[][] = []

  for (let index = 0; index < grid.length; index++) {
    visited.push(new Array(grid[0].length).fill(false))
  }

  function parseCell(x: number, y: number): number {
    if (
      x < 0 ||
      y < 0 ||
      x === grid.length ||
      y === grid[0].length ||
      visited[x][y]
    ) {
      return 0
    }

    visited[x][y] = true

    if (grid[x][y] === 0) {
      return 0
    }

    const size =
      1 +
      parseCell(x + 1, y) +
      parseCell(x, y + 1) +
      parseCell(x - 1, y) +
      parseCell(x, y - 1)

    if (size > maxSize) {
      maxSize = size
    }

    return size
  }

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      parseCell(x, y)
    }
  }

  return maxSize
}

export {maxAreaOfIsland}
