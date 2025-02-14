/**
 * https://leetcode.com/problems/diagonal-traverse-ii/description
 *
 * We want to avoid going row x row complexity, and to avoid empty spaces.
 * We assign each position a diagonal index, which is row index + col index.
 * We add all elements on a diagonal in a corresponding map entry.
 * We go from last row to first in order to ensure we add the elements in order.
 */
function findDiagonalOrder(nums: number[][]): number[] {
  const diagonals = new Map<number, number[]>()
  const result = []

  for (let rowIndex = nums.length - 1; rowIndex >= 0; rowIndex--) {
    const row = nums[rowIndex]

    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const diagonalIndex = rowIndex + colIndex

      if (!diagonals.has(diagonalIndex)) {
        diagonals.set(diagonalIndex, [])
      }

      diagonals.get(diagonalIndex).push(row[colIndex])
    }
  }

  for (let index = 0; index < diagonals.size; index++) {
    result.push(...diagonals.get(index))
  }

  return result
}

export {findDiagonalOrder}
