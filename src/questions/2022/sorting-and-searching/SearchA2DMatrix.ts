export function searchMatrix(matrix: number[][], target: number): boolean {
  const cols = matrix[0].length
  const rows = matrix.length

  for (let row = 0; row < rows; row++) {
    if (matrix[row][cols - 1] < target) {
      continue
    }

    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === target) {
        return true
      }
    }

    break
  }

  return false
}
