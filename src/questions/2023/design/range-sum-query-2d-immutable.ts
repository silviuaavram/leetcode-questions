class NumMatrix {
  private sums: number[][]
  constructor(matrix: number[][]) {
    this.sums = []

    for (let row = 0; row < matrix.length; row++) {
      this.sums.push([])

      // we calculate total matrix value where each point acts as the bottom right corner.
      for (let column = 0; column < matrix[0].length; column++) {
        const valueOnRows = this.sums[row - 1]?.[column] ?? 0
        const valueOnCols = this.sums[row]?.[column - 1] ?? 0
        const duplicateValue = this.sums[row - 1]?.[column - 1] ?? 0

        this.sums[row][column] =
          valueOnCols + valueOnRows - duplicateValue + matrix[row][column]
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    const totalValue = this.sums[row2]?.[col2] ?? 0 // get the wole matrix value up until this corner
    const valueFromRows = this.sums[row1 - 1]?.[col2] ?? 0 // subtract the rows on top of the start row.
    const valueFromCols = this.sums[row2]?.[col1 - 1] ?? 0 // subtract the cols to the left of the start col
    const duplicateValue = this.sums[row1 - 1]?.[col1 - 1] ?? 0  // add back the elements we subtracted twice.

    return totalValue - valueFromCols - valueFromRows + duplicateValue
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

export {NumMatrix}
