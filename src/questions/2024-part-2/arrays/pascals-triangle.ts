/**
 * https://leetcode.com/problems/pascals-triangle/description
 * 
 * We generate row by row.
 * On the new row, if on first or last column, add 1.
 * Else, add the sum between the numbers on the previous row, on column - 1 and column.
 */
function generate(numRows: number): number[][] {
  const result = [[1]]

  for (let row = 1; row < numRows; row++) {
    const newRow = []
    for (let column = 0; column <= row; column++) {
      if (column === 0 || column === row) {
        newRow.push(1)
      } else {
        newRow.push(result[row - 1][column - 1] + result[row - 1][column])
      }
    }
    result.push(newRow)
  }

  return result
}

export {generate}
