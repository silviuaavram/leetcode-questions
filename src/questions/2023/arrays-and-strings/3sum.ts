/**
 * https://leetcode.com/problems/3sum/
 */
function threeSum(nums: number[]): number[][] {
  const result: number[][] = []
  const resultKeys: Set<string> = new Set()
  const numsMap: Map<number, number[]> = new Map()

  nums.sort((a, b) => a - b)

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index]

    if (!numsMap.has(num)) {
      numsMap.set(num, [])
    }

    numsMap.get(num).push(index)
  }

  for (let index1 = 0; index1 < nums.length; index1++) {
    // if the next first number is the same as the last one => duplication.
    if (nums[index1] === nums[index1 - 1]) {
      continue
    }

    for (let index2 = index1 + 1; index2 < nums.length; index2++) {
      const num1 = nums[index1]
      const num2 = nums[index2]
      const target3 = 0 - num1 - num2

      if (numsMap.has(target3)) {
        const targetIndices = numsMap
          .get(target3)
          .filter(index => index > index2)

        for (
          let targetIndex = 0;
          targetIndex < targetIndices.length;
          targetIndex++
        ) {
          const potentialResult = [num1, num2, target3]
          const resultKey = potentialResult.sort((a, b) => a - b).join('')

          // only add a result if it's not a duplicate
          if (!resultKeys.has(resultKey)) {
            resultKeys.add(resultKey)
            result.push(potentialResult)
          }
        }
      }
    }
  }

  return result
}

function threeSum2(nums: number[]): number[][] {
  const result: number[][] = []
  nums.sort((a, b) => a - b)

  // call the twoSum only for the first case or if the first number is not equal to the previous (avoid duplicates).
  for (let index = 0; index < nums.length && nums[index] <= 0; index++) {
    if (index === 0 || nums[index] !== nums[index - 1]) {
      twoSum(index)
    }
  }

  function twoSum(index: number) {
    let low = index + 1
    let high = nums.length - 1

    // two pointers, search for the target depending of the sum value
    while (low < high) {
      const sum = nums[index] + nums[low] + nums[high]

      if (sum < 0) {
        low++
      } else if (sum > 0) {
        high--
      } else {
        result.push([nums[index], nums[low++], nums[high--]])

        // if second number is the same as the previous one, move pass it (avoid duplicates).
        while (low < high && nums[low] === nums[low - 1]) {
          low++
        }
      }
    }
  }

  return result
}

export {threeSum2 as threeSum}
