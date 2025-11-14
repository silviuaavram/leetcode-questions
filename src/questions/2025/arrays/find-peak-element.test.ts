import {findPeakElement} from './find-peak-element'

test('finds peak element 1', () => {
  const nums = [1, 2, 3, 1]

  expect(findPeakElement(nums)).toEqual(2)
})

test('finds peak element 2', () => {
  const nums = [1, 2, 1, 3, 5, 6, 4]

  expect([1, 5]).toContain(findPeakElement(nums))
})

test('finds peak element 3', () => {
  const nums = [4, 3, 2, 1]

  expect(findPeakElement(nums)).toEqual(0)
})

test('finds peak element 4', () => {
  const nums = [1, 2, 3, 4]

  expect(findPeakElement(nums)).toEqual(3)
})
