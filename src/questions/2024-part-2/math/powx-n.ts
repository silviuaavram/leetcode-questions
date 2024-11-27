/**
 * https://leetcode.com/problems/powx-n/description
 *
 * This implementation passes the timed tests because of the binary exponentiation is faster
 * than my initial implementation below.
 */

function myPow(x: number, n: number): number {
  function getPow(x: number, n: number): number {
    if (n === 0) {
      return 1
    }

    if (n < 0) {
      return 1 / getPow(x, -n)
    }

    // binary exponentiation. f(2,100) = f(2^2,50) = f(2^4,25) = 2^4 * f(2^4, 24) = ...
    if (n % 2 === 1) {
      return x * getPow(x * x, (n - 1) / 2)
    } else {
      return getPow(x * x, n / 2)
    }
  }

  return Math.round(getPow(x, n) * 100000) / 100000
}

// My initial implementation using recursion exceeds time limit
function myPow2(x: number, n: number): number {
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

    return getPow(x, Math.floor(n / 2)) * getPow(x, Math.ceil(n / 2))
  }

  return Math.round(getPow(x, n) * 100000) / 100000
}

export {myPow}
