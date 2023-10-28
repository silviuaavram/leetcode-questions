/**
 * https://leetcode.com/problems/diagonal-traverse/
 */
function findDiagonalOrder(mat: number[][]): number[] {
  const diagonals: number[][] = []

  for (let row = 0; row < mat.length; row++) {
    for (let column = 0; column < mat[row].length; column++) {
      const diagonalIndex = row + column

      if (diagonals[diagonalIndex] === undefined) {
        diagonals[diagonalIndex] = []
      }

      if (diagonalIndex % 2 === 1) {
        diagonals[diagonalIndex].push(mat[row][column])
      } else {
        diagonals[diagonalIndex].splice(0, 0, mat[row][column])
      }
    }
  }

  return diagonals.reduce((acc, diagonal) => {
    acc.push(...diagonal)

    return acc
  }, [])
}

export {findDiagonalOrder}
