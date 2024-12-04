/**
 * https://leetcode.com/problems/toeplitz-matrix/description
 *
 * We check for each element if it's equal to the previous one on the diagonal.
 */
function isToeplitzMatrix(matrix: number[][]): boolean {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (
        matrix[i - 1]?.[j - 1] !== undefined &&
        matrix[i][j] !== matrix[i - 1]?.[j - 1]
      ) {
        return false
      }
    }
  }
  return true
}

export {isToeplitzMatrix}
