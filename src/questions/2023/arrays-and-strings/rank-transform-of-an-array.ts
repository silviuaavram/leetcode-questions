/**
 * https://leetcode.com/problems/rank-transform-of-an-array/
 */
function arrayRankTransform(arr: number[]): number[] {
  const sortedArr = [...arr].sort((a, b) => a - b)
  const ranks = new Map<number, number>()
  let rank = 1

  for (let index = 0; index < sortedArr.length; index++) {
    if (sortedArr[index] !== sortedArr[index - 1]) {
      ranks.set(sortedArr[index], rank++)
    }
  }

  return arr.map(number => ranks.get(number))
}

export {arrayRankTransform}
