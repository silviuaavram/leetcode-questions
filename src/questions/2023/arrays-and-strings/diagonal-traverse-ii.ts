/**
 * https://leetcode.com/problems/diagonal-traverse-ii/description/
 */

function findDiagonalOrder(nums: number[][]): number[] {
  const result: [number, number][][] = []

  for (let row = 0; row < nums.length; row++) {
    for (let column = 0; column < nums[row].length; column++) {
      const diagonal = row + column

      if (result[diagonal] === undefined) {
        result[diagonal] = []
      }

      result[diagonal].push([row, nums[row][column]])
    }
  }

  result.forEach(diagonal => diagonal.sort(([row1], [row2]) => row2 - row1))

  return result.reduce<number[]>((acc, diagonal) => {
    const values = diagonal.map(element => element[1])

    acc.push(...values)

    return acc
  }, [])
}

// Brute force m*n, n is the maximum value of columns number
function findDiagonalOrder2(nums: number[][]): number[] {
  const result: number[] = []
  const columns = Math.max(...nums.map(row => row.length))

  function parsePosition(row: number, column: number): void {
    if (row < 0 || column === columns) {
      return
    }

    if (nums[row][column] !== undefined) {
      result.push(nums[row][column])
    }

    parsePosition(row - 1, column + 1)
  }

  for (let index = 0; index < nums.length; index++) {
    parsePosition(index, 0)
  }

  for (let index = 1; index < columns; index++) {
    parsePosition(nums.length - 1, index)
  }

  return result
}

export {findDiagonalOrder}
