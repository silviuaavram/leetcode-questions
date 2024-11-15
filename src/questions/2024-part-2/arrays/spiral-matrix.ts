/**
 * https://leetcode.com/problems/spiral-matrix/description
 *
 * We start with an initial direction.
 * For each case, we test what direction we are going in, and if we can go in that direction.
 * If we can't go, we try to go to the next direction clockwise.
 * Finally, when trying to go up and it's not possible, we try again to go right.
 */

function spiralOrder(matrix: number[][]): number[] {
  const path = []
  const visited = []
  const height = matrix.length
  const width = matrix[0].length

  for (let index = 0; index < height; index++) {
    visited.push(new Array(width).fill(false))
  }

  function visitNode(
    x: number,
    y: number,
    direction: 'left' | 'right' | 'up' | 'down',
  ): void {
    path.push(matrix[x][y])
    visited[x][y] = true

    switch (direction) {
      case 'right': {
        if (y + 1 < width && !visited[x][y + 1]) {
          visitNode(x, y + 1, 'right')

          return
        } else {
          direction = 'down'
        }
      }
      case 'down': {
        if (x + 1 < height && !visited[x + 1][y]) {
          visitNode(x + 1, y, 'down')

          return
        } else {
          direction = 'left'
        }
      }
      case 'left': {
        if (y - 1 >= 0 && !visited[x][y - 1]) {
          visitNode(x, y - 1, 'left')

          return
        } else {
          direction = 'up'
        }
      }
      case 'up': {
        if (x - 1 >= 0 && !visited[x - 1][y]) {
          visitNode(x - 1, y, 'up')

          return
        } else if (y + 1 < width && !visited[x][y + 1]) {
          visitNode(x, y + 1, 'right')
        }
      }
      default: {
        // nothing
      }
    }
  }

  visitNode(0, 0, 'right')

  return path
}

export {spiralOrder}
