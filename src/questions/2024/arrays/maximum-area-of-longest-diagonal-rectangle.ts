/**
 * https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/description/
 */
export function areaOfMaxDiagonal(dimensions: number[][]): number {
  let maxDiagonal = 0

  return dimensions.reduce((acc, [height, width]) => {
    const diagonal = Math.sqrt(height * height + width * width)

    if (diagonal > maxDiagonal) {
        maxDiagonal = diagonal

        return height * width
    }

    if (diagonal === maxDiagonal) {
        return Math.max(acc, height * width)
    }

    return acc
  }, 0)
}
