/**
 * https://leetcode.com/problems/design-tic-tac-toe/
 */
class TicTacToe {
  private winner: number
  private board: number[][]
  private size: number

  constructor(n: number) {
    this.winner = 0
    this.board = []
    this.size = n

    for (let index = 0; index < n; index++) {
      this.board.push([])
    }
  }

  move(row: number, col: number, player: number): number {
    if (this.winner !== 0) {
      return this.winner
    }

    this.board[row][col] = player

    const playerHasWon =
      this.checkColumn(col, player) ||
      this.checkRow(row, player) ||
      (row === col ? this.checkMajorDiagonal(player) : false) ||
      (row + col === this.size - 1 ? this.checkMinorDiagonal(player) : false)

    if (playerHasWon) {
      this.winner = player
    }

    return this.winner
  }

  private checkRow(row: number, player: number): boolean {
    for (let index = 0; index < this.size; index++) {
      if (this.board[row][index] !== player) {
        return false
      }
    }

    return true
  }

  private checkColumn(column: number, player: number): boolean {
    for (let index = 0; index < this.size; index++) {
      if (this.board[index][column] !== player) {
        return false
      }
    }

    return true
  }

  private checkMajorDiagonal(player: number): boolean {
    for (let index = 0; index < this.size; index++) {
      if (this.board[index][index] !== player) {
        return false
      }
    }

    return true
  }

  private checkMinorDiagonal(player: number): boolean {
    for (let index = 0; index < this.size; index++) {
      if (this.board[this.size - index - 1][index] !== player) {
        return false
      }
    }

    return true
  }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

export {TicTacToe}
