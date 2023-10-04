/**
 * https://leetcode.com/problems/group-shifted-strings/
 */

function groupStrings(strings: string[]): string[][] {
  // create a hash for each string that is going to be the absolute difference between the chars and the first char.
  // for instance, ab will have 1, abc will have 1-2, acef will have 2-4-5.
  // based on these hashes, we can group strings in a map.
  const shiftedStrings = new Map<string, string[]>()

  for (const string of strings) {
    const stringHash = []
    const firstLetterHash = letterToHash(string[0])

    for (let index = 1; index < string.length; index++) {
      const letterHash = letterToHash(string[index])
      const difference = letterHash - firstLetterHash

      stringHash.push(difference < 0 ? difference + 26 : difference)
    }

    const hash = stringHash.join('.')

    if (!shiftedStrings.has(hash)) {
      shiftedStrings.set(hash, [])
    }

    shiftedStrings.get(hash).push(string)
  }

  return Array.from(shiftedStrings.values())
}

function letterToHash(letter: string) {
  return letter.charCodeAt(0) - 97
}

export {groupStrings}
