/**
 * https://leetcode.com/problems/word-search/description
 *
 * We use backtracking to find the word.
 * We keep a path as a set of strings, in order to avoid using a char twice.
 * If any of the next paths is true, return true.
 * Otherwise, remove that char from the path, and return false, so that the previous step will find another way.
 */
function exist(board: string[][], word: string): boolean {
  const height = board.length
  const width = board[0].length

  function visit(x: number, y: number, target: string, path: Set<string>) {
    const char = target[0]
    const hash = `${x}-${y}`

    if (target.length === 0) {
      return true
    }

    if (
      x < 0 ||
      y < 0 ||
      x === height ||
      y === width ||
      board[x][y] !== char ||
      path.has(hash)
    ) {
      return false
    }

    const newTarget = target.slice(1)
    path.add(hash)

    const result =
      visit(x + 1, y, newTarget, path) ||
      visit(x - 1, y, newTarget, path) ||
      visit(x, y + 1, newTarget, path) ||
      visit(x, y - 1, newTarget, path)

    if (result) {
      return true
    }

    path.delete(hash)

    return false
  }

  for (let x = 0; x < height; x++) {
    for (let y = 0; y < width; y++) {
      const result = visit(x, y, word, new Set())

      if (result) {
        return true
      }
    }
  }

  return false
}

export {exist}
