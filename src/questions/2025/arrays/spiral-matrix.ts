/**
 * https://leetcode.com/problems/spiral-matrix
 */
function spiralOrder(matrix: number[][]): number[] {
  const rows = matrix.length
  const columns = matrix[0].length

  const visited = []
  for (let index = 0; index < rows; index++) {
    visited.push([])
  }

  const result = []

  let row = 0
  let column = 0
  let direction = 'right'

  function isBlocked(row: number, column: number) {
    return (
      row < 0 ||
      column < 0 ||
      row === rows ||
      column === columns ||
      visited[row][column]
    )
  }

  while (result.length < rows * columns) {
    result.push(matrix[row][column])
    visited[row][column] = true

    switch (direction) {
      case 'right':
        if (column === columns - 1 || visited[row][column + 1]) {
          direction = 'down'
          row++

          if (isBlocked(row, column)) {
            break
          }
        } else {
          column++
        }
        break
      case 'down':
        if (row === rows - 1 || visited[row + 1][column]) {
          direction = 'left'
          column--

          if (isBlocked(row, column)) {
            break
          }
        } else {
          row++
        }
        break
      case 'left': {
        if (column === 0 || visited[row][column - 1]) {
          direction = 'up'
          row--

          if (isBlocked(row, column)) {
            break
          }
        } else {
          column--
        }
        break
      }
      case 'up': {
        if (row === 0 || visited[row - 1][column]) {
          direction = 'right'
          column++

          if (isBlocked(row, column)) {
            break
          }
        } else {
          row--
        }
      }
      default:
      //nothing
    }
  }

  return result
}

export {spiralOrder}
