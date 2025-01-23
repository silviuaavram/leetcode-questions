/**
 * https://leetcode.com/problems/diagonal-traverse/description
 * 
 * If we don't hit any limits, we go on the diagonal in ascending or descending order.
 * When ascending, if we hit right limit, we go down one space, and change to descending.
 * If we hit top limit, we go right one space, and change to descending.
 * When descending, if we hit bottom limit, we go to the right one space, and change to ascending.
 * If we hit left limit, we go down one space, and change to ascending.
 * If we reach last position, [height - 1][width - 1], we exit.
 */
function findDiagonalOrder(mat: number[][]): number[] {
  const result = []
  const height = mat.length
  const width = mat[0].length

  function parseElement(x: number, y: number, direction: 'asc' | 'desc') {
    result.push(mat[x][y])

    if (x === height - 1 && y === width - 1) {
      return
    }

    if (direction === 'asc') {
      if (y === width - 1) {
        return parseElement(x + 1, y, 'desc')
      }

      if (x === 0) {
        return parseElement(x, y + 1, 'desc')
      }

      return parseElement(x - 1, y + 1, 'asc')
    } else {
      if (x === height - 1) {
        return parseElement(x, y + 1, 'asc')
      }

      if (y === 0) {
        return parseElement(x + 1, y, 'asc')
      }

      return parseElement(x + 1, y - 1, 'desc')
    }
  }

  parseElement(0, 0, 'asc')

  return result
}

export {findDiagonalOrder}
