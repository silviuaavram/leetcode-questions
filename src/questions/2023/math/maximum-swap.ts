/**
 * https://leetcode.com/problems/maximum-swap/
 */
function maximumSwap(num: number): number {
  // we will keep each digit occurances in a map.
  const numberDigits = String(num).split('').map(Number)
  const sortedNums = numberDigits
    .map((digit, index) => ({digit, index}))
    .reduce((acc, {digit, index}) => {
      if (!acc.has(digit)) {
        acc.set(digit, [])
      }

      acc.get(digit).push(index)

      return acc
    }, new Map<number, number[]>())

  // we will also have the digits sorted
  const sortedDigits = [...numberDigits].sort().reverse()

  // and we will also sort the digit occurance indeces
  for (const sortedDigit of sortedDigits) {
    sortedNums.get(sortedDigit).sort().reverse()
  }

  // we want to replace the leftmost digit with the max one, but if the max digit occurs more than once, we want to use the rightmost one.
  for (let index = 0; index < numberDigits.length; index++) {
    if (numberDigits[index] < sortedDigits[0]) {
      const aux = numberDigits[index]
      numberDigits[index] = sortedDigits[0]
      numberDigits[sortedNums.get(sortedDigits[0])[0]] = aux

      return Number(numberDigits.join(''))
    }

    // if we already have the max digit in this index, remove it from the max digits stack and also its leftmost index stored in the map.
    sortedNums.get(sortedDigits[0]).pop()
    sortedDigits.splice(0, 1)
  }

  return num
}

export {maximumSwap}
