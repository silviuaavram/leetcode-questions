import {nextPermutation} from './next-permutation'

test('computes next permutation 1', () => {
  const nums = [1, 2, 3]

  nextPermutation(nums)

  expect(nums).toEqual([1, 3, 2])
})

test('computes next permutation 2', () => {
  const nums = [3, 2, 1]

  nextPermutation(nums)

  expect(nums).toEqual([1, 2, 3])
})

test('computes next permutation 3', () => {
  const nums = [1, 1, 5]

  nextPermutation(nums)

  expect(nums).toEqual([1, 5, 1])
})

test('computes next permutation 4', () => {
  const nums = [1, 3, 5, 4, 2]

  nextPermutation(nums)

  expect(nums).toEqual([1, 4, 2, 3, 5])
})

test('computes next permutation 5', () => {
  const nums = [1, 5, 4, 3, 2]

  nextPermutation(nums)

  expect(nums).toEqual([2, 1, 3, 4, 5])
})

test('computes next permutation 6', () => {
  const nums = [1, 2, 3, 4, 5]

  nextPermutation(nums)

  expect(nums).toEqual([1, 2, 3, 5, 4])
})

test('computes next permutation 7', () => {
  const nums = [1, 2, 3, 4, 5, 7, 9, 10]

  nextPermutation(nums)

  expect(nums).toEqual([1, 2, 3, 4, 5, 7, 10, 9])
})

test('computes next permutation 8', () => {
  const nums = [2, 3, 1, 3, 3]

  nextPermutation(nums)

  expect(nums).toEqual([2, 3, 3, 1, 3])
})
