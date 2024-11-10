/**
 * https://leetcode.com/problems/top-k-frequent-elements/description
 *
 * We will get the occurances for each number, then we sort the map entries by occurances and grab the first k entries.
 */
function topKFrequent(nums: number[], k: number): number[] {
  const occurances = nums.reduce((acc, num) => {
    acc.set(num, (acc.get(num) ?? 0) + 1)

    return acc
  }, new Map<number, number>())

  return Array.from(occurances.entries())
    .sort(([_1, times1], [_2, times2]) => times2 - times1)
    .slice(0, k )
    .map(entry => entry[0])
}

export {topKFrequent}
