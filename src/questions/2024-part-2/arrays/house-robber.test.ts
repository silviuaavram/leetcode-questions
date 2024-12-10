import {rob} from './house-robber'

test('robs houses 1', () => {
  const nums = [1, 2, 3, 1]

  expect(rob(nums)).toEqual(4)
})

test('robs houses 2', () => {
  const nums = [2, 7, 9, 3, 1]

  expect(rob(nums)).toEqual(12)
})

test('robs houses 3', () => {
  const nums = [2, 1, 1, 2]

  expect(rob(nums)).toEqual(4)
})
