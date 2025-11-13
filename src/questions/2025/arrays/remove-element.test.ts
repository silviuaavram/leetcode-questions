import {removeElement} from './remove-element'

test('removes occurances of number in array 1', () => {
  const nums = [3, 2, 2, 3]
  const val = 3

  expect(removeElement(nums, val)).toEqual(2)
  expect(nums.slice(0, 2)).toEqual(expect.arrayContaining([2, 2]))
})

test('removes occurances of number in array 2', () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2]
  const val = 2

  expect(removeElement(nums, val)).toEqual(5)
  expect(nums.slice(0, 5)).toEqual(expect.arrayContaining([0, 1, 4, 0, 3]))
})
