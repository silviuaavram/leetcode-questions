/**
 * https://leetcode.com/problems/max-area-of-island/description
 * 
 * We iterate in the grid and do a DFS when we encounter an island.
 * We save and share the size of current island using a number in an array, so it can be passed around.
 */
function maxAreaOfIsland(grid: number[][]): number {
  const visited: boolean[][] = []
  let result = 0

  for (let index = 0; index < grid.length; index++) {
    visited.push(new Array(grid[0].length).fill(false))
  }

  function visit(x: number, y: number, size: number[]) {
    if (
      x < 0 ||
      y < 0 ||
      x === grid.length ||
      y === grid[0].length ||
      visited[x][y]
    ) {
      return
    }

    visited[x][y] = true

    if (grid[x][y] === 0) {
      return
    }

    size[0]++

    result = Math.max(size[0], result)

    visit(x + 1, y, size)
    visit(x - 1, y, size)
    visit(x, y + 1, size)
    visit(x, y - 1, size)
  }

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      visit(x, y, [0])
    }
  }

  return result
}

export {maxAreaOfIsland}
