/**
 * https://leetcode.com/problems/coin-change-ii/description
 * 
 * We use top down dynamic programming.
 * Each step involves picking the coin or not picking it.
 * If we pick it, we can pick it again.
 * Our iteration is based on the index of the coin we are considering, and the amount we still have to return.
 * If amount is 0, it means we can return 1, correct solution.
 * If amount is less than 0, it means we exceed the amount with the coins picked, we return 0 (no solution).
 * If index exceeds the number of coins, it means we don't have coins left, we return 0 (no solution).
 * Otherwise the solution is the sum of solutions between picking or not picking the coin.
 * We also save the partial solutions so we don't compute them multiple times.
 */
function change(amount: number, coins: number[]): number {
  const solutions = []

  for (let index = 0; index < coins.length; index++) {
    solutions.push(new Array(amount + 1).fill(-1))
    solutions[index][0] = 1
  }

  function getChange(index: number, amount: number) {
    if (amount < 0) {
      return 0
    }

    if (index === coins.length) {
      return 0
    }

    if (amount === 0) {
      return 1
    }

    if (solutions[index][amount] !== -1) {
        return solutions[index][amount]
    }

    const result =
      getChange(index + 1, amount) + getChange(index, amount - coins[index])

    solutions[index][amount] = result

    return result
  }

  getChange(0, amount)

  return solutions[0][amount]
}

export {change}
