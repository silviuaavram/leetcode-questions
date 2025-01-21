/**
 * https://leetcode.com/problems/maximum-swap/description
 * 
 * We split the number into digits.
 * We want to swap the leftmost digit with the biggest digit that's most to the right.
 * We do a pass from the right and save, for each index, the index of the largest number from that index onward.
 * Then we do a pass from the left, and if the digit is smaller than the largest number from that point, we swap.
 * For example, 2736 has the following largest indeces starting from each point: [1, 1, 3, 3].
 * For the first 2 positions, the largest is 7, while for the last 2 positions, it's 6. That's why we swap 2 with 7.
 */
function maximumSwap(num: number): number {
  const digits = String(num).split('').map(Number)
  const maxIndex = new Array(digits.length)

  maxIndex[maxIndex.length - 1] = maxIndex.length - 1

  for (let index = maxIndex.length - 2; index >= 0; index--) {
    maxIndex[index] =
      digits[index] > digits[maxIndex[index + 1]] ? index : maxIndex[index + 1]
  }

  for (let index = 0; index < digits.length; index++) {
    if (digits[index] < digits[maxIndex[index]]) {
      const aux = digits[index]
      digits[index] = digits[maxIndex[index]]
      digits[maxIndex[index]] = aux

      return Number(digits.join(''))
    }
  }

  return num
}

export {maximumSwap}
