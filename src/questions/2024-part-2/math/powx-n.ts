/**
 * https://leetcode.com/problems/powx-n/description
 *
 * We use recursive calls and memoisation.
 * Recursion stops when n is 0 or 1.
 * Otherwise, we return multiplication.
 * Ex: 5^7 = 5^3 * 5^4.
 * We save the results for different indeces in a map, so we don't re-calculate.
 */

function myPow(x: number, n: number): number {
  const results = new Map<number, number>()
  function getPow(x: number, n: number): number {
    if (n < 0) {
      return 1 / getPow(x, -n)
    }

    if (n === 0) {
      return 1
    }

    if (n === 1) {
      return x
    }

    if (results.has(n)) {
      return results.get(n)
    }

    const result = getPow(x, Math.floor(n / 2)) * getPow(x, Math.ceil(n / 2))

    results.set(n, result)

    return result
  }

  return Math.round(getPow(x, n) * 100000) / 100000
}

export {myPow}
