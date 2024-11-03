/**
 * https://leetcode.com/problems/number-of-islands/description
 * 
 * We use a visited grid to track which position we visit.
 * We iterate through the grid and if we find a '1', we found an island, and try to visit it as much as possible.
 * In the visit function, we visit as much as possible from the current position, and mark in the grid.
 * We repeat the process.
 */
function numIslands(grid: string[][]): number {
  const visited: boolean[][] = []
  const height = grid.length
  const width = grid[0].length
  let islands = 0

  for (let index = 0; index < height; index++) {
    visited.push(new Array(grid[0].length).fill(false))
  }

  function visit(m: number, n: number) {
    if (
      m < 0 ||
      n < 0 ||
      m >= height ||
      n >= width ||
      visited[m][n] ||
      grid[m][n] === '0'
    ) {
      return
    }

    visited[m][n] = true

    visit(m - 1, n)
    visit(m + 1, n)
    visit(m, n + 1)
    visit(m, n - 1)
  }

  for (let m = 0; m < height; m++) {
    for (let n = 0; n < width; n++) {
      if (grid[m][n] === '1' && !visited[m][n]) {
        islands++
        visit(m, n)
      }
    }
  }

  return islands
}

export {numIslands}
