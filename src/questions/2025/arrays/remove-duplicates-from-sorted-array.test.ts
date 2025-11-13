import {removeDuplicates} from './remove-duplicates-from-sorted-array'

test('removes duplicates 1', () => {
  const nums = [1, 1, 2]

  expect(removeDuplicates(nums)).toEqual(2)
  expect(nums.slice(0, 2)).toEqual([1, 2])
})

test('removes duplicates 2', () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

  expect(removeDuplicates(nums)).toEqual(5)
  expect(nums.slice(0, 5)).toEqual([0, 1, 2, 3, 4])
})
