/**
 * https://leetcode.com/problems/out-of-boundary-paths/description/
 */
export function findPaths(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number,
): number {
  const previousResults: Map<number, number>[][] = []

  for (let i = 0; i < m; i++) {
    const arr = []
    for (let j = 0; j < n; j++) {
      arr.push(new Map())
    }

    previousResults.push(arr)
  }

  function checkPath(i: number, j: number, moves: number): number {
    if (i < 0 || j < 0 || i === m || j === n) {
      return 1
    }

    if (moves === maxMove) {
      return 0
    }

    if (previousResults[i][j].has(moves)) {
      return previousResults[i][j].get(moves)
    }

    const result =
      checkPath(i - 1, j, moves + 1) +
      checkPath(i + 1, j, moves + 1) +
      checkPath(i, j + 1, moves + 1) +
      checkPath(i, j - 1, moves + 1)

    previousResults[i][j].set(moves, result % (Math.pow(10, 9) + 7))

    return result
  }

  return checkPath(startRow, startColumn, 0) % (Math.pow(10, 9) + 7)
}
