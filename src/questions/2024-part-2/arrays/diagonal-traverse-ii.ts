/**
 * https://leetcode.com/problems/diagonal-traverse-ii/description
 *
 * We create a parsing function that goes upwards and rightwards.
 * We call this startng on first column for all the rows, then from the second column on the last row.
 */
function findDiagonalOrder(nums: number[][]): number[] {
  let result = []
  const rows = nums.length
  const cols = nums.reduce((acc, num) => Math.max(acc, num.length), -Infinity)

  function parseDiagonal(row: number, col: number): void {
    if (row < 0 || col === cols) {
      return
    }

    const number = nums[row][col]

    if (number !== undefined) {
      result.push(number)
    }

    parseDiagonal(row - 1, col + 1)
  }

  for (let index = 0; index < rows; index++) {
    parseDiagonal(index, 0)
  }

  for (let index = 1; index < cols; index++) {
    parseDiagonal(rows - 1, index)
  }

  return result
}

export {findDiagonalOrder}
