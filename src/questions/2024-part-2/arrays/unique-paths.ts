/**
 * https://leetcode.com/problems/unique-paths/description
 * 
 * We parse each cell recursively and also save the result in a matrix.
 * If there's a result from that cell, we return it.
 * Otherwise we return the result from neighbouring cells and save it.
 */
function uniquePaths(m: number, n: number): number {
  const paths = []

  for (let index = 0; index < m; index++) {
    paths.push(new Array(n).fill(undefined))
  }

  paths[m - 1][n - 1] = 1

  function parseCell(x: number, y: number): number {
    if (x === m || y === n) {
      return 0
    }

    if (paths[x][y] === undefined) {
      paths[x][y] = parseCell(x + 1, y) + parseCell(x, y + 1)
    }

    return paths[x][y]
  }

  parseCell(0, 0)

  return paths[0][0]
}

export {uniquePaths}
