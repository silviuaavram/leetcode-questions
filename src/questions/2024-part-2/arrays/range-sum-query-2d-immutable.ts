/**
 * https://leetcode.com/problems/range-sum-query-2d-immutable/description
 * 
 * We use a matrix to compute, for each position i j, the total value from 0,0 until i,j.
 * The value for i,j is:
 * 1. the value from the top i-1,j
 * 2. add value from the left i,j-1
 * 3. subtract i-1,j-1 since we added it twice.
 * 4. add the number at i,j
 * Then, for each matrix required, the value is:
 * 1. total value until row2,col2
 * 2. subtract top, which is row1-1,col2 
 * 3. subtract left, which is row2,col1-1
 * 4. add row1-1,col1 since we subtracted it twice.
 */

class NumMatrix {
  private solutions: number[][]

  constructor(matrix: number[][]) {
    this.solutions = []

    for (let i = 0; i < matrix.length; i++) {
      this.solutions.push([])

      for (let j = 0; j < matrix[0].length; j++) {
        const valueFromTop = this.solutions[i - 1]?.[j] ?? 0
        const valueFromLeft = this.solutions[i]?.[j - 1] ?? 0
        const duplicatedValue = this.solutions[i - 1]?.[j - 1] ?? 0

        this.solutions[i][j] =
          valueFromLeft + valueFromTop - duplicatedValue + matrix[i][j]
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    const totalValueUntilEnd = this.solutions[row2][col2]
    const valueFromTop = this.solutions[row1 - 1][col2]
    const valueFromLeft = this.solutions[row2][col1 - 1]
    const duplicatedValue = this.solutions[row1 - 1][col1 - 1]

    return totalValueUntilEnd - valueFromLeft - valueFromTop + duplicatedValue
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

export {NumMatrix}
