import {findMatrix} from './convert-an-array-into-a-2d-array-with-conditions'

test('converts 1d array into 2d array 1', () => {
  const nums = [1, 3, 4, 1, 2, 3, 1]
  const result = findMatrix(nums)

  expect(result).toEqual(
    expect.arrayContaining([
      expect.arrayContaining([1, 3, 4, 2]),
      expect.arrayContaining([1, 3]),
      expect.arrayContaining([1]),
    ]),
  )
})

test('converts 1d array into 2d array 2', () => {
  const nums = [1, 2, 3, 4]
  const result = findMatrix(nums)

  expect(result).toEqual(
    expect.arrayContaining([expect.arrayContaining([1, 3, 4, 2])]),
  )
})
