/**
 * https://leetcode.com/problems/toeplitz-matrix/
 */
function isToeplitzMatrix(matrix: number[][]): boolean {
  const width = matrix.length
  const height = matrix[0].length

  function checkDiagonal(i: number, j: number, value?: number): boolean {
    if (i >= width || j >= height) {
      return true
    }

    if (value === matrix[i][j]) {
      return checkDiagonal(i + 1, j + 1, matrix[i][j])
    }

    return false
  }

  for (let index = 0; index < height; index++) {
    const isToeplitz = checkDiagonal(0, index, matrix[0][index])

    if (!isToeplitz) {
      return false
    }
  }

  for (let index = 1; index < width; index++) {
    const isToeplitz = checkDiagonal(index, 0, matrix[index][0])

    if (!isToeplitz) {
      return false
    }
  }

  return true
}

export {isToeplitzMatrix}
