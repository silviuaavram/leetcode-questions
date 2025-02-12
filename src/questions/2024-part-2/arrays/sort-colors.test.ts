import {sortColors} from './sort-colors'

test('sorts colors 1', () => {
  const nums = [2, 0, 2, 1, 1, 0]

  sortColors(nums)

  expect(nums).toEqual([0, 0, 1, 1, 2, 2])
})

test('sorts colors 2', () => {
  const nums = [2, 0, 1]

  sortColors(nums)

  expect(nums).toEqual([0, 1, 2])
})

test('sorts colors 3', () => {
  const nums = [1, 1, 0, 0, 0]

  sortColors(nums)

  expect(nums).toEqual([0, 0, 0, 1, 1])
})

test('sorts colors 4', () => {
  const nums = [0, 0, 2, 1, 1]

  sortColors(nums)

  expect(nums).toEqual([0, 0, 1, 1, 2])
})
