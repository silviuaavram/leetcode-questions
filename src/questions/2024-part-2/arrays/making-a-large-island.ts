/**
 * https://leetcode.com/problems/making-a-large-island/description
 * 
 * We start by marking the islands in a separate grid, each island with an ID.
 * Then, for each 0, we try to find if it can merge islands.
 * If so, the resulting size is updated with the current maximum.
 */
function largestIsland(grid: number[][]): number {
  const size = grid.length
  const islandsGrid = new Array()
  const islands = new Map<number, number>()

  for (let index = 0; index < size; index++) {
    islandsGrid.push(new Array(size).fill(undefined))
  }

  function visitNode(x: number, y: number, island?: number): void {
    if (
      x < 0 ||
      y < 0 ||
      x === size ||
      y === size ||
      islandsGrid[x][y] !== undefined
    ) {
      return
    }

    if (grid[x][y] === 0) {
      islandsGrid[x][y] = 0

      return
    }

    if (island === undefined) {
      island = islands.size + 1
      islands.set(island, 1)
    } else {
      islands.set(island, islands.get(island) + 1)
    }

    islandsGrid[x][y] = island

    visitNode(x - 1, y, island)
    visitNode(x + 1, y, island)
    visitNode(x, y - 1, island)
    visitNode(x, y + 1, island)
  }

  function getLargeIsland(x: number, y: number): number {
    const neighbouringIslands = new Set<number>()

    if (islandsGrid[x - 1]?.[y] > 0) {
      neighbouringIslands.add(islandsGrid[x - 1][y])
    }

    if (islandsGrid[x + 1]?.[y] > 0) {
      neighbouringIslands.add(islandsGrid[x + 1][y])
    }

    if (islandsGrid[x]?.[y + 1] > 0) {
      neighbouringIslands.add(islandsGrid[x][y + 1])
    }

    if (islandsGrid[x]?.[y - 1] > 0) {
      neighbouringIslands.add(islandsGrid[x][y - 1])
    }

    return Array.from(neighbouringIslands).reduce((acc, island) => {
      return acc + islands.get(island)
    }, 0) + 1
  }

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      visitNode(x, y)
    }
  }

  let result = Math.max(...Array.from(islands.values()))

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (grid[x][y] === 0) {
        result = Math.max(result, getLargeIsland(x, y))
      }
    }
  }

  return result
}

export {largestIsland}
