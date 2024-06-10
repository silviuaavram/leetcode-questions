/**
 * https://leetcode.com/problems/perfect-squares/
 */

export function numSquares(n: number): number {
  const squaresMap = new Map<number, number>()

  for (let i = 1; i <= n; i++) {
    if (isPerfectSquare(i)) {
      squaresMap.set(i, 1)

      continue
    }

    let minSquares = i

    for (let j = 1; j <= Math.floor(i / 2); j++) {
      const currentSquares = squaresMap.get(j) + squaresMap.get(i - j)

      minSquares = Math.min(currentSquares, minSquares)
    }

    squaresMap.set(i, minSquares)
  }

  return squaresMap.get(n)
}

function isPerfectSquare(n: number): boolean {
  return Number.isInteger(Math.sqrt(n))
}
