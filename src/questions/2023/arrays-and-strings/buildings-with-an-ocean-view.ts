function findBuildings(heights: number[]): number[] {
  if (!heights.length) {
    return []
  }

  const result = [heights.length - 1]
  let maxHeight = heights[heights.length - 1]

  // from right to left, always check if the current height is greater than the maximum height.
  for (let index = heights.length - 2; index >= 0; index--) {
    const height = heights[index]

    // if it's greater than the max height, it has view, and becomes the new max height.
    if (height > maxHeight) {
      maxHeight = height
      result.push(index)
    }
  }

  return result.reverse()
}

export {findBuildings}
