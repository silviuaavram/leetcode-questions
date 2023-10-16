/**
 * https://leetcode.com/problems/best-meeting-point/
 */
function minTotalDistance(grid: number[][]): number {
  let distance: number
  const friends: number[][] = []

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column]) {
        friends.push([row, column])
      }
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      let totalDistance = 0
      for (const friend of friends) {
        const distance =
          Math.abs(friend[0] - row) + Math.abs(friend[1] - column)

        totalDistance += distance
      }

      if (distance === undefined) {
        distance = totalDistance
      } else {
        distance = Math.min(distance, totalDistance)
      }
    }
  }

  return distance
}

export {minTotalDistance}
