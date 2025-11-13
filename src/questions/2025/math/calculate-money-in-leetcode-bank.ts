/**
 * https://leetcode.com/problems/calculate-money-in-leetcode-bank/description
 */
function totalMoney(n: number): number {
  const k = Math.floor(n / 7)
  const firstWeek = 28
  const lastWeek = 28 + (k - 1) * 7
  const sumForFullWeeks = (k * (firstWeek + lastWeek)) / 2
  let totalSum = sumForFullWeeks

  for (let index = 0; index < n % 7; index++) {
    totalSum += k + 1 + index
  }

  return totalSum
}

export {totalMoney}
