/**
 * https://leetcode.com/problems/the-kth-factor-of-n/description
 *
 * We just iterate from 1 to n and if the number divides n, we increment a counter.
 * If counter reaches k, we return the number.
 */

function kthFactor(n: number, k: number): number {
  let count = 0
  for (let index = 1; index <= n; index++) {
    if (n % index === 0) {
      count++
    }

    if (count === k) {
      return index
    }
  }
  return -1
}

export {kthFactor}
