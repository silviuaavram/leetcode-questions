import {rob} from './house-robber-ii'

test('robs houses 1', () => {
  const nums = [2, 3, 2]

  expect(rob(nums)).toEqual(3)
})

test('robs houses 2', () => {
  const nums = [1, 2, 3, 1]

  expect(rob(nums)).toEqual(4)
})

test('robs houses 3', () => {
  const nums = [1, 2, 3]

  expect(rob(nums)).toEqual(3)
})

test('robs houses 4', () => {
  const nums = [1, 3, 1, 3, 100]

  expect(rob(nums)).toEqual(103)
})

test('robs houses 5', () => {
  const nums = [7, 4, 1, 9, 3, 8, 6, 5]

  expect(rob(nums)).toEqual(26)
})
