/**
 * https://leetcode.com/problems/furthest-building-you-can-reach/description
 * 
 * For each jump we use a ladder by default, and save the jump value in a min heap.
 * When we need to jump but don't have a ladder, we check if the smallest jump we used a ladder is smaller than the current jump.
 * If it is, we will use bricks for that jump, and the ladder in the current jump.
 * If the current jump is smaller than the smallest jump we used a ladder for, we will use bricks here.
 * When we use bricks, we also check if we have enough. If not, we stop there, because we won't have anymore ladders anyway.
 */
function furthestBuilding(
  heights: number[],
  bricks: number,
  ladders: number,
): number {
  const laddersUsed = []
  let bricksUsed = 0

  function insert(jump: number) {
    var low = 0,
      high = laddersUsed.length

    while (low < high) {
      var mid = (low + high) >>> 1
      if (laddersUsed[mid] < jump) low = mid + 1
      else high = mid
    }

    laddersUsed.splice(low, 0, jump)
  }

  for (let index = 0; index < heights.length - 1; index++) {
    if (heights[index] >= heights[index + 1]) {
      continue
    }

    let jump = heights[index + 1] - heights[index]

    if (laddersUsed.length < ladders) {
      insert(jump)

      continue
    }

    if (laddersUsed.length) {
      if (jump < laddersUsed[0]) {
        if (jump > bricks - bricksUsed) {
          return index
        }

        bricksUsed = bricksUsed + jump

        continue
      }

      const lastJump = laddersUsed.splice(0, 1)[0]
      insert(jump)
      jump = lastJump
    }

    if (jump > bricks - bricksUsed) {
      return index
    }

    bricksUsed = bricksUsed + jump
  }

  return heights.length - 1
}

export {furthestBuilding}
