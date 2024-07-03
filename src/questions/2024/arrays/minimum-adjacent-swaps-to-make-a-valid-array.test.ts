import {minimumSwaps} from './minimum-adjacent-swaps-to-make-a-valid-array'

test('minimum swaps 1', () => {
  const nums = [3, 4, 5, 5, 3, 1]

  expect(minimumSwaps(nums)).toEqual(6)
})

test('minimum swaps 2', () => {
  const nums = [9]

  expect(minimumSwaps(nums)).toEqual(0)
})

test('minimum swaps 3', () => {
  const nums = [2, 2, 1, 4, 3, 3]

  expect(minimumSwaps(nums)).toEqual(4)
})
test('minimum swaps 4', () => {
  const nums = [3, 2]

  expect(minimumSwaps(nums)).toEqual(1)
})
test('minimum swaps 5', () => {
  const nums = [1, 3, 2]

  expect(minimumSwaps(nums)).toEqual(1)
})

test('minimum swaps 6', () => {
  const nums = [3, 3, 2, 2]

  expect(minimumSwaps(nums)).toEqual(3)
})
