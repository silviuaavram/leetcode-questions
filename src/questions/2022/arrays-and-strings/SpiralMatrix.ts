export function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = []
  const visited = new Set<string>()

  if (!matrix.length) {
    return result
  }

  enum Direction {
    Left,
    Right,
    Up,
    Down,
  }

  const rows = matrix.length
  const cols = matrix[0].length

  function visitNode(row: number, col: number, direction: Direction): void {
    visited.add(`${row}-${col}`)

    const nextCol = col + 1
    const prevCol = col - 1
    const prevRow = row - 1
    const nextRow = row + 1

    const canGoRight = !visited.has(`${row}-${nextCol}`) && nextCol < cols
    const canGoLeft = !visited.has(`${row}-${prevCol}`) && prevCol >= 0
    const canGoUp = !visited.has(`${prevRow}-${col}`) && prevRow >= 0
    const canGoDown = !visited.has(`${nextRow}-${col}`) && nextRow < rows

    switch (direction) {
      case Direction.Right:
        if (canGoRight) {
          visitNode(row, nextCol, Direction.Right)
        } else if (canGoDown) {
          visitNode(nextRow, col, Direction.Down)
        } else if (canGoLeft) {
          visitNode(row, prevCol, Direction.Left)
        } else if (canGoUp) {
          visitNode(prevRow, col, Direction.Up)
        }
        break
      case Direction.Down:
        if (canGoDown) {
          visitNode(nextRow, col, Direction.Down)
        } else if (canGoLeft) {
          visitNode(row, prevCol, Direction.Left)
        } else if (canGoUp) {
          visitNode(prevRow, col, Direction.Up)
        } else if (canGoRight) {
          visitNode(row, nextCol, Direction.Right)
        }
        break
      case Direction.Left:
        if (canGoLeft) {
          visitNode(row, prevCol, Direction.Left)
        } else if (canGoUp) {
          visitNode(prevRow, col, Direction.Up)
        } else if (canGoRight) {
          visitNode(row, nextCol, Direction.Right)
        } else if (canGoDown) {
          visitNode(nextRow, col, Direction.Down)
        }
        break
      case Direction.Up:
        if (canGoUp) {
          visitNode(prevRow, col, Direction.Up)
        } else if (canGoRight) {
          visitNode(row, nextCol, Direction.Right)
        } else if (canGoDown) {
          visitNode(nextRow, col, Direction.Down)
        } else if (canGoLeft) {
          visitNode(row, prevCol, Direction.Left)
        }
      default:
        break
    }
  }

  visitNode(0, 0, Direction.Right)

  return Array.from(visited)
    .map(e => e.split('-'))
    .map(([i, j]) => matrix[i][j])
}
