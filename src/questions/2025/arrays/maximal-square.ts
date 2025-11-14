/**
 * https://leetcode.com/problems/maximal-square/description
 */
function maximalSquare(matrix: string[][]): number {
  let result = 0
  const visited = []

  for (let index = 0; index < matrix.length; index++) {
    visited.push(new Array(matrix[0].length).fill(false))
  }

  function checkSquare(row: number, column: number, size = 2) {
    if (visited[row][column]) {
      return size - 1
    }


    for (let index = 0; index < size; index++) {
      if (matrix[row + index]?.[column + size - 1] !== '1') {
        return size - 1
      }

      if (matrix[row + size - 1]?.[column + index] !== '1') {
        return size - 1
      }
    }

    return checkSquare(row, column, size + 1)
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (matrix[row][column] === '0') {
        continue
      }

      result = Math.max(result, Math.pow(checkSquare(row, column), 2))
    }
  }

  return result
}

export {maximalSquare}
