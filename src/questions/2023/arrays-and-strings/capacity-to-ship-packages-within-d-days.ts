/**
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 */
function shipWithinDays(weights: number[], days: number): number {
    // maximum capacity is the total load.
    let max = weights.reduce((acc, weight) => acc + weight, 0)
    // minimum capacity is the biggest package.
    let min = weights.reduce((acc, weight) => Math.max(acc, weight), 0)
  
    function isLoadPossible(capacity: number): boolean {
      let daysCount = 1
      let cargo = 0
  
      for (let index = 0; index < weights.length; index++) {
        cargo += weights[index]
  
        if (cargo > capacity) {
          daysCount++
          cargo = weights[index]
  
          if (daysCount > days) {
            return false
          }
        }
      }
  
      return true
    }
  
    while (min < max) {
      const mid = Math.floor((min + max) / 2)
  
      if (isLoadPossible(mid)) {
          max = mid
      } else {
          min = mid + 1
      }
    }
  
    return min
  }
  
export {shipWithinDays}
