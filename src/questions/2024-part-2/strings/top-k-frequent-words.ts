/**
 * https://leetcode.com/problems/top-k-frequent-words/description
 * 
 * We add the words in a frequency map.
 * We sort the entries by frequency, and if equal, lexicographically.
 * We take the first k keys and return.
 */
function topKFrequent(words: string[], k: number): string[] {
  const frequencies = new Map<string, number>()

  for (const word of words) {
    frequencies.set(word, (frequencies.get(word) ?? 0) + 1)
  }

  return Array.from(frequencies.entries())
    .sort((e1, e2) => {
      if (e1[1] === e2[1]) {
        return e1[0] <= e2[0] ? -1 : 1
      }

      return e2[1] - e1[1]
    })
    .map(entry => entry[0])
    .slice(0, k)
}

export {topKFrequent}
