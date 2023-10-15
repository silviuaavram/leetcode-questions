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

export {threeSum}
