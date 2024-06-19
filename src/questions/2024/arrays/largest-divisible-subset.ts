/**
 * https://leetcode.com/problems/largest-divisible-subset/description/
 */
export function largestDivisibleSubset(unsortedNums: number[]): number[] {
  // we sort the nums
  const nums = [...unsortedNums].sort((a, b) => a - b)
  const solutions = new Map<number, number[]>()

  for (let index = 0; index < nums.length; index++) {
    solutions.set(nums[index], [nums[index]])
  }

  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i]
    for (let j = 0; j < i; j++) {
      const num2 = nums[j]

      // if a num i divides itself with a smaller one j, it means it is also divisible with j's other divisors, so we merge
      if (
        num1 % num2 === 0 &&
        solutions.get(num2).length >= solutions.get(num1).length
      ) {
        // we update the solution for num i if it contains more numbers
        solutions.set(num1, [...solutions.get(num2), num1])
      }
    }
  }

  return Array.from(solutions.values()).reduce((acc, solution) => {
    if (solution.length > acc.length) {
      acc = solution
    }

    return acc
  }, [])
}
