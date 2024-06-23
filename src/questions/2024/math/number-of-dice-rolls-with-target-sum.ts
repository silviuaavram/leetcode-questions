/**
 * https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/description/
 */

export function numRollsToTarget(n: number, k: number, target: number): number {
  const solutions: number[][] = []

  for (let index = 0; index <= n; index++) {
    solutions.push([])
  }

  function rollDice(roll: number, sum: number): number {
    // if we reached the last roll, we check the sum added so far, and return 1 if we have a solution
    if (roll === n) {
      return sum === target ? 1 : 0
    }

    let totalResult = 0

    // if we are not on the last roll, we compute all the possible rolls.
    for (let index = 0; index < k; index++) {
      // for the next roll we will compute, we are going to pass the updated sum based on the possible roll.
      const newSum = sum + index + 1
      const newRoll = roll + 1

      // if we don't have rollet yet previously for the [newRoll][newSum] we will actually roll and stash the solution
      if (solutions[newRoll][newSum] === undefined) {
        const result = rollDice(newRoll, newSum)

        solutions[newRoll][newSum] = result % (Math.pow(10, 9) + 7)
      }

      totalResult += solutions[newRoll][newSum]
    }

    return totalResult
  }

  return rollDice(0, 0) % (Math.pow(10, 9) + 7)
}
