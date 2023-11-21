/**
 * https://leetcode.com/problems/minimum-window-substring/
 */
function minWindow(s: string, t: string): string {
  const expected = t.split('').reduce((acc: Map<string, number>, character) => {
    acc.set(character, (acc.get(character) ?? 0) + 1)

    return acc
  }, new Map<string, number>())
  const actual = new Map<string, number>(
    Array.from(expected.keys()).map(key => [key, 0]),
  )

  let result = ''
  let right = 0
  let left = 0

  // helper function to check if the string is covered.
  function isCovered(): boolean {
    for (const key of Array.from(expected.keys())) {
      // the actual coverage for a character should be equal or greater than the target.
      if (actual.get(key) < expected.get(key)) {
        return false
      }
    }

    return true
  }

  while (right < s.length) {
    // expand window to the right to get all the characters.
    while (right < s.length) {
      const letter = s[right++]

      if (expected.has(letter)) {
        actual.set(letter, actual.get(letter) + 1)
      }

      // we stop when we covered the target, we will save the result if small enough, then we try to shrink it.
      if (isCovered()) {
        if (result === '' || right - left < result.length) {
          result = s.slice(left, right)
        }

        break
      }
    }

    // shrink window from the left until we don't have all the characters anymore.
    while (left < right) {
      const letter = s[left++]

      // we break shrinking if we stopped covering the target.
      if (expected.has(letter)) {
        actual.set(letter, actual.get(letter) - 1)

        if (!isCovered()) {
          break
        }
      }

      // if we removed a character from the window but we still cover the target, update the result.
      if (isCovered() && (result === '' || right - left < result.length)) {
        result = s.slice(left, right)
      }
    }
  }

  return result
}

export {minWindow}
