/**
 * https://leetcode.com/problems/top-k-frequent-elements
 */
function topKFrequent(nums: number[], k: number): number[] {
  const frequencies = new Map<number, number>()

  for (const num of nums) {
    frequencies.set(num, (frequencies.get(num) ?? 0) + 1)
  }

  const entries = Array.from(frequencies.entries())
  const numbers = new Map<number, number[]>()

  for (const [number, frequency] of entries) {
    if (!numbers.has(frequency)) {
      numbers.set(frequency, [])
    }

    numbers.get(frequency).push(number)
  }

  const result = []

  for (let index = nums.length; index > 0; index--) {
    if (numbers.has(index)) {
      result.push(...numbers.get(index))

      if (result.length === k) {
        return result
      }
    }
  }


  throw new Error('should not reach here')
}

export {topKFrequent}
