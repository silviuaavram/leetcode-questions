/**
 Do not return anything, modify nums in-place instead.
 */
export function sortColors(nums: number[]): void {
  // assume that all the 0s are to the left of indexOf0
  let indexOf0 = 0
  // assume that all of the 2s are to the right of indexOf2
  let indexOf2 = nums.length - 1
  // if there are only 1s, problem solved
  let index = 0

  while (index <= indexOf2) {
    if (nums[index] === 0) {
      // it means we have one more 0 to the left of indexOf0, so we will increment it and swap values.
      nums[index] = nums[indexOf0]
      nums[indexOf0] = 0
      indexOf0++
      index++

      continue
    }

    if (nums[index] === 2) {
      // it means we have one more 2 to the right of indexOf2, so we will decrement it and swap values
      nums[index] = nums[indexOf2]
      nums[indexOf2] = 2
      indexOf2--

      // we will not increment index yet, since the number swapped (nums[indexOf2]) can be a 0, and it needs another iteration and swap.

      continue
    }

    index++
  }
}
