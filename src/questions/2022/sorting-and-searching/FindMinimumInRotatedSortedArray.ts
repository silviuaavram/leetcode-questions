export function findMin(nums: number[]): number {
  let result = nums[0]

  function find(start: number, end: number) {
    if (start > end) {
      return
    }
    
    const middle = Math.floor((start + end) / 2)
    const number = nums[middle]

    if (number > result) {
      find(start + 1, end)
    } else {
      result = number
      find(start, middle - 1)
    }
  }

  find(1, nums.length - 1)

  return result
}
