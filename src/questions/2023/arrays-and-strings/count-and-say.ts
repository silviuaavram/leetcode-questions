/**
 * https://leetcode.com/problems/count-and-say/
 */
function countAndSay(n: number): string {
  let result = '1'

  function getNext(number: string) {
    const numbers = number.split('')

    const accumulator = numbers.reduce(
      (acc, digit) => {
        if (digit !== acc.lastDigit) {
          if (acc.lastDigit) {
            acc.result += acc.count
            acc.result += acc.lastDigit
          }

          acc.count = 1
          acc.lastDigit = digit
        } else {
          acc.count++
        }

        return acc
      },
      {count: 0, lastDigit: '', result: ''},
    )

    accumulator.result += accumulator.count
    accumulator.result += accumulator.lastDigit

    return accumulator.result
  }

  for (let index = 1; index < n; index++) {
    result = getNext(result)
  }

  return result
}

export {countAndSay}
