import {threeSum} from './3sum'

test('returns the triplets that sum up to 0 1', () => {
  const nums = [-1, 0, 1, 2, -1, -4]

  expect(threeSum(nums)).toEqual([
    expect.arrayContaining([-1, -1, 2]),
    expect.arrayContaining([-1, 0, 1]),
  ])
})

test('returns the triplets that sum up to 0 2', () => {
  const nums = [0, 1, 1]

  expect(threeSum(nums)).toEqual([])
})

test('returns the triplets that sum up to 0 3', () => {
  const nums = [0, 0, 0]

  expect(threeSum(nums)).toEqual([[0, 0, 0]])
})

test('returns the triplets that sum up to 0 4', () => {
  const nums = [-2, 0, 1, 1, 2]

  expect(threeSum(nums)).toEqual([
    expect.arrayContaining([-2, 0, 2]),
    expect.arrayContaining([-2, 1, 1]),
  ])
})

test('returns the triplets that sum up to 0 5', () => {
  const nums = [3, 0, -2, -1, 1, 2]

  expect(threeSum(nums)).toEqual([
    expect.arrayContaining([-2, -1, 3]),
    expect.arrayContaining([-2, 0, 2]),
    expect.arrayContaining([-1, 0, 1]),
  ])
})
