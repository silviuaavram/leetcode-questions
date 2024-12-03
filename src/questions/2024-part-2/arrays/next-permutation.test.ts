import {nextPermutation} from './next-permutation'

test('permutes numbers 1', () => {
  const nums = [1, 2, 3]

  nextPermutation(nums)

  expect(nums).toEqual([1, 3, 2])
})

test('permutes numbers 2', () => {
  const nums = [3, 2, 1]

  nextPermutation(nums)

  expect(nums).toEqual([1, 2, 3])
})

test('permutes numbers 3', () => {
  const nums = [1, 1, 5]

  nextPermutation(nums)

  expect(nums).toEqual([1, 5, 1])
})

test('permutes numbers 4', () => {
  const nums = [3, 6, 5]

  nextPermutation(nums)

  expect(nums).toEqual([5, 3, 6])
})

test('permutes numbers 5', () => {
  const nums = [1, 3, 2]

  nextPermutation(nums)

  expect(nums).toEqual([2, 1, 3])
})

test('permutes numbers 6', () => {
  const nums = [1, 5, 1]

  nextPermutation(nums)

  expect(nums).toEqual([5, 1, 1])
})
