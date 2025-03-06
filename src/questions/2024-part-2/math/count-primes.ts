/**
 * https://leetcode.com/problems/count-primes/description
 * 
 * We want to generate all numbers that won't be prime.
 * We will use an array of size n-1 and each index will represent if a number is prime.
 * 1 starts as false.
 * We then generate from 2 * multiplier, which starts from 2 as well.
 * We generate numbers until we reach n.
 */
function countPrimes(n: number): number {
  if (n < 2) {
    return 0
  }

  const numbers = new Array(n - 1).fill(true)
  numbers[0] = false

  for (let number = 2; number < Math.sqrt(n); number++) {
    let multiplier = 2

    while (number * multiplier < n) {
      const notPrime = number * multiplier++

      numbers[notPrime - 1] = false
    }
  }

  return numbers.filter(n => n === true).length
}

export {countPrimes}
