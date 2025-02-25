/**
 * https://leetcode.com/problems/sort-characters-by-frequency
 * 
 * One classic way is to count chars in a map, sort and add them to result, with n(logn) time complexity.
 * To achieve O(n) time, we can keep an additional map of buckets, and have each character in its frequency bucket.
 * We cannot have a frequency of more than the string size.
 * After we add the characters in their buckets, we build the resulting string.
 */
function frequencySort(s: string): string {
  const chars = s.split('')
  const buckets = new Map<number, Set<string>>()
  const frequencies = new Map<string, number>()

  for (let index = 1; index <= chars.length; index++) {
    buckets.set(index, new Set())
  }

  for (const char of chars) {
    if (!frequencies.has(char)) {
      frequencies.set(char, 1)
      buckets.get(1).add(char)
    } else {
      const frequency = frequencies.get(char)

      buckets.get(frequency).delete(char)
      buckets.get(frequency + 1).add(char)

      frequencies.set(char, frequency + 1)
    }
  }

  const resultChars = []

  for (let frequency = s.length; frequency >= 1; frequency--) {
    const charsWithFrequency = Array.from(buckets.get(frequency))

    for (const char of charsWithFrequency) {
      resultChars.push(...Array(frequency).fill(char))
    }
  }

  return resultChars.join('')
}

export {frequencySort}
