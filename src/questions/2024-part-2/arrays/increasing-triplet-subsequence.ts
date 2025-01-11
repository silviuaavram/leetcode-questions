/**
 * https://leetcode.com/problems/increasing-triplet-subsequence/description
 * 
 * We use 2 variables, c1 and c2, to be the first and second numbers of the triplet.
 * Then we iterate through the numbers.
 * If number is less than first number, we update that first number.
 * Otherwise, it means it's either the second or third number.
 * If it's less than second number, we update the second number.
 * If it's greater than both, we have a solution.
 */
function increasingTriplet(nums: number[]): boolean {
  let c1 = Infinity
  let c2 = Infinity

  for (const num of nums) {
    if (num <= c1) {
      c1 = num
    } else if (num <= c2) {
      c2 = num
    } else {
      return true
    }
  }

  return false
}

export {increasingTriplet}
