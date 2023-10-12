/**
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/
 */
function shortestPathBinaryMatrix(grid: number[][]): number {
  const rows = grid.length
  const columns = grid[0].length
  let result = -1

  if (grid[0][0] === 1 || grid[rows - 1][columns - 1] === 1) {
    return -1
  }

  const nodesToVisit: number[][] = [[0, 0, 1]]
  const visited: boolean[][] = []

  for (let index = 0; index < rows; index++) {
    visited.push([])
  }

  // We need a BFS approach instead of DFS, since we need to fire all the next visits when in a position.
  // We also need to mark them as visited before actually going to visit them, so we don't re-visit them.
  while (nodesToVisit.length) {
    const [row, column, distance] = nodesToVisit.splice(0, 1)[0]

    // IF we reached the end, update the result if needed.
    if (row === rows - 1 && column === columns - 1) {
      result = result === -1 ? distance : Math.min(result, distance)
      continue
    }

    const nextIndeces = [
      [row + 1, column],
      [row + 1, column - 1],
      [row + 1, column + 1],
      [row, column - 1],
      [row, column + 1],
      [row - 1, column],
      [row - 1, column - 1],
      [row - 1, column + 1],
    ]

    // For all the possible future positions, process them if:
    for (const [row, column] of nextIndeces) {
      // They are not out of bounds, they don't have a "1" as content, or they are not already in the processing queue.
      if (
        row < 0 ||
        row === rows ||
        column < 0 ||
        column === columns ||
        visited[row][column] ||
        grid[row][column]
      ) {
        continue
      }

      // We push the next processing and mark it as visited, so we know it's already in the queue.
      // If it's already in the queue, it means we reached it before this processing, and that distance is smaller, so no need to try to go there again.
      nodesToVisit.push([row, column, distance + 1])
      visited[row][column] = true
    }
  }

  return result
}

export {shortestPathBinaryMatrix}
