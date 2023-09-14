import {sortColors} from '../SortColors'

test('sorts colors', function sortsColors() {
  const nums = [2, 0, 2, 1, 1, 0]
  const expected = [0, 0, 1, 1, 2, 2]

  sortColors(nums)

  expect(nums).toEqual(expected)
})

test('sorts fewer colors', function sortsFewerColors() {
  const nums = [2, 0, 1]
  const expected = [0, 1, 2]

  sortColors(nums)

  expect(nums).toEqual(expected)
})

test('sorts missing colors', function sortsMissingColors() {
  const nums = [2, 2, 1, 2, 2, 1]
  const expected = [1, 1, 2, 2, 2, 2]

  sortColors(nums)

  expect(nums).toEqual(expected)
})

test('sorts already sorted colors', function sortsSortedColors() {
  const nums = [0, 0, 1, 2]
  const expected = [0, 0, 1, 2]

  sortColors(nums)

  expect(nums).toEqual(expected)
})
