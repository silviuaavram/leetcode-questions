/**
 * https://leetcode.com/problems/number-of-distinct-islands/description
 * 
 * This one has 2 parts.
 * To identify the islands, we use a DFS.
 * We iterate through all the nodes, and if we find an island, we start a DFS to get all of it.
 * When we have all the islands, we remove the duplicates.
 * We sort the island coordinates by height and width, so each is represented left->right, top->bottom.
 * We iterate through all the islands for each island, and check if they are equal.
 * We check equality by getting the offset between the first point of each island.
 * Then we use that offset to compare point by point.
 * When we find 2 equal islands, we remove one from the array, and continue.
 */
function numDistinctIslands(grid: number[][]): number {
  const height = grid.length
  const width = grid[0].length
  const islands: number[][][] = []
  const visited: boolean[][] = []

  for (let index = 0; index < height; index++) {
    visited.push(new Array(width).fill(false))
  }

  function parseIsland(x: number, y: number, island: number[][]) {
    if (x < 0 || y < 0 || x === height || y === width || visited[x][y]) {
      return
    }

    visited[x][y] = true

    if (grid[x][y] === 0) {
      return
    }

    island.push([x, y])

    parseIsland(x + 1, y, island)
    parseIsland(x - 1, y, island)
    parseIsland(x, y + 1, island)
    parseIsland(x, y - 1, island)
  }

  for (let x = 0; x < height; x++) {
    for (let y = 0; y < width; y++) {
      if (visited[x][y]) {
        continue
      }

      if (grid[x][y] === 0) {
        visited[x][y] = true

        continue
      }

      const island = []
      islands.push(island)

      parseIsland(x, y, island)
    }
  }

  islands.forEach(island => island.sort(([x1, y1], [x2, y2]) => {
    if (x1 === x2) {
      return y1 - y2
    }

    return x1 - x2
  }))

  function areIslandsEqual(island1: number[][], island2: number[][]): boolean {
    if (island1.length !== island2.length) {
      return false
    }

    const offsetX = island1[0][0] - island2[0][0]
    const offsetY = island1[0][1] - island2[0][1]

    for (let index = 0; index < island1.length; index++) {
      const [x1, y1] = island1[index]
      const [x2, y2] = island2[index]

      if (x2 + offsetX === x1 && y2 + offsetY === y1) {
        continue
      }

      return false
    }

    return true
  }

  for (let index1 = 0; index1 < islands.length; index1++) {
    for (let index2 = 0; index2 < islands.length; index2++) {
      const island1 = islands[index1]
      const island2 = islands[index2]

      if (island1 !== island2 && areIslandsEqual(island1, island2)) {
        islands.splice(index1, 1)
        index1--
        break
      }

    }
  }

  return islands.length
}

export {numDistinctIslands}
