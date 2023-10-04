/**
 * https://leetcode.com/problems/custom-sort-string
 */
function customSortString(order: string, s: string): string {
    // we count how many times a char appears in s.
  const occurances = s.split('').reduce(function (acc, char) {
    acc.set(char, (acc.get(char) ?? 0) + 1)

    return acc
  }, new Map())

  // the first part of result will be the characters from order * times they appear in s.
  const result = order.split('').reduce(function (acc, char) {
    if (occurances.has(char)) {
      for (let index = 0; index < occurances.get(char); index++) {
        acc.push(char)
      }

      occurances.delete(char)
    }

    return acc
  }, [])

  // the last part will be the other chars in s in any order * times they appear.
  Array.from(occurances.entries()).reduce(function (acc, [char, occurance]) {
    for (let index = 0; index < occurance; index++) {
      acc.push(char)
    }

    return acc
  }, result)

  return result.join('')
}

export {customSortString}
