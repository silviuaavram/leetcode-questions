/**
 * https://leetcode.com/problems/buildings-with-an-ocean-view/description
 *
 * We just iterate backwards, and keep track of the highest building at the time.
 * If we find a higher building, we add it to result, and update the highest building value.
 */
function findBuildings(heights: number[]): number[] {
  let max = 0

  return [...heights]
    .reverse()
    .reduce((acc, height, index) => {
      if (height > max) {
        acc.push(heights.length - 1 - index)
        max = height
      }

      return acc
    }, [])
    .reverse()
}

export {findBuildings}
