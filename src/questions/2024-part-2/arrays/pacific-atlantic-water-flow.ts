/**
 * https://leetcode.com/problems/pacific-atlantic-water-flow/description
 * 
 * We do a DFS starting from the shore indeces.
 * We check if water can flow from a neighbouring position.
 * If so, we DFS on that position as well.
 * For each iteration, we mark the position as it's possible to have water flowing.
 * In the end we return the positions that have water flowing from both.
 */
function pacificAtlantic(heights: number[][]): number[][] {
  const pacificAccess: boolean[][] = []
  const atlanticAccess: boolean[][] = []
  const height = heights.length
  const width = heights[0].length

  for (let index = 0; index < heights.length; index++) {
    pacificAccess.push(new Array(heights[0].length).fill(false))
    atlanticAccess.push(new Array(heights[0].length).fill(false))
  }

  const offsets = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ]

  function processNode(i: number, j: number, access: boolean[][]): void {
    access[i][j] = true

    for (const [iOffset, jOffset] of offsets) {
      const newI = i + iOffset
      const newJ = j + jOffset

      if (
        newI < 0 ||
        newJ < 0 ||
        newI === height ||
        newJ === width ||
        access[newI][newJ] ||
        heights[newI][newJ] < heights[i][j]
      ) {
        continue
      }

      processNode(newI, newJ, access)
    }
  }

  for (let index = 0; index < height; index++) {
    processNode(index, 0, pacificAccess)
    processNode(index, width - 1, atlanticAccess)
  }

  for (let index = 0; index < width; index++) {
    processNode(0, index, pacificAccess)
    processNode(height - 1, index, atlanticAccess)
  }

  const result: number[][] = []

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      if (atlanticAccess[i][j] && pacificAccess[i][j]) {
        result.push([i, j])
      }
    }
  }

  return result
}

export {pacificAtlantic}
