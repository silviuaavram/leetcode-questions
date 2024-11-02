/**
 * https://leetcode.com/problems/two-sum/description/
 * 
 * We sort the numbers first and also keep their initial indeces so we return the proper index.
 * We start with 2 indeces, start = 0 and end = length - 1, check the sum, then increment
 * start or decrement end depending on the resulting sum.
 */
function twoSum(nums: number[], target: number): number[] {
  const numsWithIndeces = nums.map((num, index) => ({num, index}))
  const sortedNumsWithIndeces = numsWithIndeces.sort((a, b) => a.num - b.num)

  let start = 0
  let end = sortedNumsWithIndeces.length - 1

  while (start < end) {
    const sum = sortedNumsWithIndeces[start].num + sortedNumsWithIndeces[end].num

    if (sum === target) {
      return [sortedNumsWithIndeces[start].index, sortedNumsWithIndeces[end].index]
    }

    if (sum < target) {
      start++
    } else {
      end--
    }
  }

  return null
}

export {twoSum}
