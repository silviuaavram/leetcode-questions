/**
 * https://leetcode.com/problems/rotting-oranges/description
 *
 * We go through the grid and count the good oranges, and store the bad oranges.
 * Then, while we still have good oranges, we go through the rotten ones, and check if they will affect others.
 * If an orange is affected, we will mark it as future bad, and decrease the good oranges count.
 * If the count did not decrease, and it's not 0, we return -1.
 * Otherwise we just iterate again through the new bad oranges we just stored.
 */
function orangesRotting(grid: number[][]): number {
  const rottenOranges = []
  let remainingOranges = 0

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === 1) {
        remainingOranges++
      } else if (grid[x][y] === 2) {
        rottenOranges.push([x, y])
      }
    }
  }

  function parseRottenOrange(x: number, y: number) {
    for (const [a, b] of [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ]) {
      if (
        a >= 0 &&
        b >= 0 &&
        a < grid.length &&
        b < grid[0].length &&
        grid[a][b] === 1
      ) {
        grid[a][b] = 2
        remainingOrangesNext--
        rottenOrangesNext.push([a, b])
      }
    }
  }

  let remainingOrangesNext = remainingOranges
  let rottenOrangesNext = []
  let result = 0

  while (remainingOranges > 0) {
    for (const [x, y] of rottenOranges) {
      parseRottenOrange(x, y)
    }

    if (remainingOrangesNext === remainingOranges) {
      return -1
    }

    rottenOranges.length = 1
    rottenOranges.push(...rottenOrangesNext)
    remainingOranges = remainingOrangesNext

    result++
  }

  return result
}

export {orangesRotting}
