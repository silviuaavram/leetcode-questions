/**
 * https://leetcode.com/problems/powx-n/
 */

function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1
  }

  if (n < 0) {
    return 1 / myPow(x, -n)
  }

  // binary exponentiation. f(2,100) = f(2^2,50) = f(2^4,25) = 2^4 * f(2^4, 24) = ...
  if (n % 2 === 1) {
    return x * myPow(x * x, (n - 1) / 2)
  } else {
    return myPow(x * x, n / 2)
  }
}

export {myPow}
