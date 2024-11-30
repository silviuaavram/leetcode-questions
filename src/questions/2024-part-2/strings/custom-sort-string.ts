/**
 * https://leetcode.com/problems/custom-sort-string/description
 * 
 * We use the order string to create an order dictionary, with the value as the char order.
 * Then we sort the string based on the order from the dictionary.
 */

function customSortString(order: string, s: string): string {
  const charOrder = order
    .split('')
    .reduce((acc, char, index) => acc.set(char, index), new Map())

  return s
    .split('')
    .sort((charA, charB) => {
      if (!charOrder.has(charA)) {
        return 1
      }

      if (!charOrder.has(charB)) {
        return -1
      }

      return charOrder.get(charA) - charOrder.get(charB)
    })
    .join('')
}

export {customSortString}
