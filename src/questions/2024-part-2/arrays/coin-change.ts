/**
 * https://leetcode.com/problems/coin-change/description
 * 
 * We use dynamic programming to use solutions form previous amounts.
 * We go from 1 to amount, then for each amount, we go through the coints.
 * We subtract coin from the amount, then check if we have a number of coins saved for the remainder.
 * If so, we check if 1 + the saved coints is the minimum amount.
 * If we don't have a coins value, we save -1 for that amount.
 */
function coinChange(coins: number[], amount: number): number {
  if (amount === 0) {
    return 0
  }

  const solutions = [0]

  for (let sum = 1; sum <= amount; sum++) {
    let minimum = Infinity

    for (const coin of coins) {
      const remainder = sum - coin

      if (remainder < 0) {
        continue
      }

      minimum = Math.min(
        minimum,
        1 + (solutions[remainder] === -1 ? Infinity : solutions[remainder]),
      )
    }

    solutions[sum] = minimum === Infinity ? -1 : minimum
  }

  return solutions[amount]
}

export {coinChange}
