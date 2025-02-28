/**
 * https://leetcode.com/problems/n-queens/description
 * 
 * We will use backtracking .
 * In the backtrack function, we will attempt to place a queen on a row, trying each column.
 * When trying a column, we check if there are other queens on the same column, diagonal and counter diagonal.
 * To do the checks, we have sets to keep track which column/diagonal/counter diagonal indeces are taken.
 * Column index is just column index, diagonal index is column index - row index, counter diagonal is column index + row index.
 * If we cannot place it, we try on the next column.
 * If we can place it, we update the columns, diagonals and counter diagonals with this placement, and call backtrack for next row.
 * After the call, we remove the column/diagonal/counter diagonal entries, and try the next column, since we want to return all posibilities.
 */
function solveNQueens(n: number): string[][] {
  const queens: number[] = Array(n).fill(-1)
  const columns = new Set<number>()
  const diagonals = new Set<number>()
  const counterDiagonals = new Set<number>()
  const results = []

  function positionQueen(row: number) {
    if (row === n) {
      const result = []
      for (let index = 0; index < n; index++) {
        const rowResult = Array(n).fill('.')
        rowResult[queens[index]] = 'Q'

        result.push(rowResult.join(''))
      }

      results.push(result)
      return
    }

    for (let column = 0; column < n; column++) {
      if (columns.has(column)) {
        continue
      }

      const diagonal = column - row

      if (diagonals.has(diagonal)) {
        continue
      }

      const counterDiagonal = column + row

      if (counterDiagonals.has(counterDiagonal)) {
        continue
      }

      queens[row] = column
      columns.add(column)
      diagonals.add(diagonal)
      counterDiagonals.add(counterDiagonal)

      positionQueen(row + 1)

      columns.delete(column)
      diagonals.delete(diagonal)
      counterDiagonals.delete(counterDiagonal)
    }
  }

  positionQueen(0)

  return results
}

export {solveNQueens}
