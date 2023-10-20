import {findPeakElement} from '../find-peak-element'

test('returns a peak element 1', () => {
  const nums = [1, 2, 3, 1]

  expect(findPeakElement(nums)).toEqual(2)
})

test('returns a peak element 2', () => {
  const nums = [1, 2, 1, 3, 5, 6, 4]

  expect(findPeakElement(nums)).toEqual(5)
})

test('returns a peak element 3', () => {
  const nums = [2, 1]

  expect(findPeakElement(nums)).toEqual(0)
})

test('returns a peak element 4', () => {
  const nums = [2]

  expect(findPeakElement(nums)).toEqual(0)
})
