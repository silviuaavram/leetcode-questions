/**
 * https://leetcode.com/problems/reorganize-string/
 */

export function reorganizeString(s: string): string {
  const charCount = s.split('').reduce((acc, char) => {
    acc.set(char, (acc.get(char) ?? 0) + 1)

    return acc
  }, new Map())


  // builds the string by adding the most used character to the acc first.
  // returns empty string when it has to add the same character twice.
  function buildString(acc: string[], entries: [string, number][]): string {
    if (!entries.length) {
      return acc.join('')
    }

    const [currentEntry, nextEntry] = entries
    const lastChar = acc[acc.length - 1]
    const [currentChar, currentCount] = currentEntry

    if (lastChar === currentChar) {
      if (!nextEntry) {
        return ''
      }

      const [nextChar, nextCount] = nextEntry

      acc.push(nextChar)

      if (nextCount === 1) {
        entries.splice(1, 1)
      } else {
        nextEntry[1]--
      }
    } else {
      acc.push(currentChar)

      if (currentCount === 1) {
        entries.splice(0, 1)
      } else {
        currentEntry[1]--
      }
    }

    // instead of sorting them all the time, better to use MaxHeap to pop and push back, for the currentEntry and sometimes nextEntry.
    entries.sort(([_char1, coubt1], [_char2, count2]) => count2 - coubt1)

    return buildString(acc, entries)
  }

  const sortedEntries = Array.from(charCount.entries())
  sortedEntries.sort(([_char1, coubt1], [_char2, count2]) => count2 - coubt1)

  return buildString([], sortedEntries)
}
