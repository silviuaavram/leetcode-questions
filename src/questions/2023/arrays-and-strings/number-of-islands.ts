/**
 * https://leetcode.com/problems/number-of-islands/
 */

function numIslands(grid: string[][]): number {
  const visited: boolean[][] = []
  let islands = 0

  for (let index = 0; index < grid.length; index++) {
    visited.push([])
  }

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (visited[row][column]) {
        continue
      }

      visited[row][column] = true

      if (grid[row][column] === '0') {
        continue
      }

      islands++

      processIsland(row + 1, column)
      processIsland(row, column + 1)
    }
  }

  function processIsland(row: number, column: number) {
    if (
      row < 0 ||
      row === grid.length ||
      column < 0 ||
      column === grid[0].length ||
      visited[row][column]
    ) {
      return
    }

    visited[row][column] = true

    if (grid[row][column] === '0') {
      return
    }

    processIsland(row + 1, column)
    processIsland(row, column + 1)
    processIsland(row - 1, column)
    processIsland(row, column - 1)
  }

  return islands
}

export {numIslands}
