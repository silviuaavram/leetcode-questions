import {findKthLargest} from '../kth-largest-element-in-an-array'

test('return 5 as 2nd largest', () => {
  const nums = [3, 2, 1, 5, 6, 4]
  const k = 2

  expect(findKthLargest(nums, k)).toEqual(5)
})

test('return 4 as 4th largest', () => {
  const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
  const k = 4

  expect(findKthLargest(nums, k)).toEqual(4)
})
