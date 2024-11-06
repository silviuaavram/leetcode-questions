import {threeSum} from './3sum'

test('returns the triplets 1', () => {
  const nums = [-1, 0, 1, 2, -1, -4]

  expect(threeSum(nums)).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ])
})

test('returns the triplets 2', () => {
  const nums = [0, 1, 1]

  expect(threeSum(nums)).toEqual([])
})

test('returns the triplets 3', () => {
  const nums = [0, 0, 0]

  expect(threeSum(nums)).toEqual([[0, 0, 0]])
})

test('returns the triplets 4', () => {
  const nums = [0, 0, 0, 0]

  expect(threeSum(nums)).toEqual([[0, 0, 0]])
})

test('returns the triplets 5', () => {
  const nums = [-2, -2, -2, 1, 1, 1]

  expect(threeSum(nums)).toEqual([[-2, 1, 1]])
})

test('returns the triplets 6', () => {
  const nums = [-2, 0, 1, 1, 2]

  expect(threeSum(nums)).toEqual([
    [-2, 0, 2],
    [-2, 1, 1],
  ])
})
