import {rearrangeArray} from './rearrange-array-elements-by-sign'

test('rearranges nums in array 1', () => {
  const nums = [3, 1, -2, -5, 2, -4]

  expect(rearrangeArray(nums)).toEqual([3, -2, 1, -5, 2, -4])
})

test('rearranges nums in array 2', () => {
  const nums = [-1, 1]

  expect(rearrangeArray(nums)).toEqual([1, -1])
})

test('rearranges nums in array 3', () => {
  const nums = [1, 2, 3, -1, -2, -3]

  expect(rearrangeArray(nums)).toEqual([1, -1, 2, -2, 3, -3])
})

test('rearranges nums in array 4', () => {
  const nums = [-1, -2, -3, 1, 2, 3]

  expect(rearrangeArray(nums)).toEqual([1, -1, 2, -2, 3, -3])
})
