/**
 * https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/
 */
export function findMatrix(nums: number[]): number[][] {
  const occurances = new Map<number, number>()

  for (const num of nums) {
    occurances.set(num, (occurances.get(num) ?? 0) + 1)
  }

  return Array.from(occurances.entries()).reduce((acc, [num, occurance]) => {
    while (acc.length < occurance) {
        acc.push([])
    }

    for (let index = 0; index < occurance; index++) {
        acc[index].push(num)
    }

    return acc
  }, [])
}
