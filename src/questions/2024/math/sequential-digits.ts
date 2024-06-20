/**
 * https://leetcode.com/problems/sequential-digits/description/
 */

export function sequentialDigits(low: number, high: number): number[] {
  const generatedSequentialDigitNumbers: number[] = []

  function getStartNumber(size: number): number {
    let number = 0

    for (let index = 0; index < size; index++) {
      number = number * 10 + (index + 1)
    }

    return number
  }

  function getEndNumber(size: number): number {
    let number = 0

    for (let index = 0; index < size; index++) {
      number = (9 - index) * Math.pow(10, index) + number
    }

    return number
  }

  for (let index = 1; index < 10; index++) {
    const start = getStartNumber(index)
    const end = getEndNumber(index)

    for (
      let number = start;
      number <= end;
      number += Number('1'.repeat(index))
    ) {
      generatedSequentialDigitNumbers.push(number)
    }
  }

  return generatedSequentialDigitNumbers.filter(
    number => number >= low && number <= high,
  )
}
