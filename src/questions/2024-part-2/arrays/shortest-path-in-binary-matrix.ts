/**
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/description
 *
 * We go with a BFS and traverse the matrix.
 * DFS may reach the end node faster, but most probably with a longer cost, and it will take many iterations to update.
 * BFS will reach the end node slower but it will provide the best cost once it reaches it.
 */
function shortestPathBinaryMatrix(grid: number[][]): number {
  const size = grid.length
  const costs = []

  for (let index = 0; index < size; index++) {
    costs.push(new Array(grid[0].length).fill(-1))
  }

  const queue = [[0, 0, 1]]

  while (queue.length) {
    const [x, y, cost] = queue.splice(0, 1)[0]

    if (x < 0 || y < 0 || x === size || y === size || grid[x][y] === 1) {
      continue
    }

    if (costs[x][y] === -1 || costs[x][y] > cost) {
      costs[x][y] = cost

      queue.push([x + 1, y, cost + 1])
      queue.push([x - 1, y, cost + 1])
      queue.push([x, y + 1, cost + 1])
      queue.push([x, y - 1, cost + 1])
      queue.push([x + 1, y + 1, cost + 1])
      queue.push([x - 1, y - 1, cost + 1])
      queue.push([x - 1, y + 1, cost + 1])
      queue.push([x + 1, y - 1, cost + 1])
    }
  }

  return costs[size - 1][size - 1]
}

export {shortestPathBinaryMatrix}
