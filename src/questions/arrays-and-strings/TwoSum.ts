export function twoSum(nums: number[], target: number): number[] {
  const numsMap = new Map<number, number[]>()

  for (let index = 0; index < nums.length; index++) {
    numsMap.set(nums[index], [...(numsMap.get(nums[index]) ?? []), index])
  }

  const mapKeys = Array.from(numsMap.keys())

  for (const num1 of mapKeys) {
    const num2 = target - num1
    const num1Index = numsMap.get(num1)

    if (num2 === num1 && num1Index.length === 2) {
      return num1Index
    }

    const num2Index = numsMap.get(num2)

    if (num2 !== num1 && num2Index !== undefined) {
      return [num1Index[0], num2Index[0]]
    }
  }

  throw new Error(
    'Should not reach here since all arrays should contain one solution.',
  )
}
