/**
 Do not return anything, modify matrix in-place instead.
 */
export function setZeroes(matrix: number[][]): void {
  const rows = matrix.length
  const cols = matrix[0]?.length ?? 0
  const rowsToZero = new Set<number>()
  const colsToZero = new Set<number>()

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 0) {
        rowsToZero.add(row)
        colsToZero.add(col)
      }
    }
  }
  const rowsToZeroArray = Array.from(rowsToZero)
  const colsToZeroArray = Array.from(colsToZero)

  for (let index = 0; index < rowsToZeroArray.length; index++) {
    const row = rowsToZeroArray[index]

    for (let col = 0; col < cols; col++) {
      matrix[row][col] = 0
    }
  }

  for (let index = 0; index < colsToZeroArray.length; index++) {
    const col = colsToZeroArray[index]

    for (let row = 0; row < rows; row++) {
      matrix[row][col] = 0
    }
  }
}
