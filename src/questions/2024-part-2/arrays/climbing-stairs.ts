/**
 * https://leetcode.com/problems/climbing-stairs/description
 *
 * We make use of previous steps, and memoize the solutions.
 * We initialize the first 2 steps with 1 and 2, then return based on memo solution of previous calls.
 */
function climbStairs(n: number): number {
  const stairs = new Array(n)
  function getStairs(n: number) {
    if (n === 1) {
      return 1
    }

    if (n === 2) {
      return 2
    }

    if (stairs[n] !== undefined) {
      return stairs[n]
    }

    const result = getStairs(n - 1) + getStairs(n - 2)
    stairs[n] = result

    return result
  }

  return getStairs(n)
}

export {climbStairs}
