/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 */
function topKFrequent(nums: number[], k: number): number[] {
  const frequencies = new Map<number, number>()

  for (const num of nums) {
    frequencies.set(num, (frequencies.get(num) ?? 0) + 1)
  }

  return Array.from(frequencies.entries())
    .sort(([_num1, freq1], [_num2, freq2]) => freq2 - freq1)
    .map(([num, _freq]) => num)
    .slice(0, k)
}

export {topKFrequent}
