import {canSeePersonsCount} from './number-of-visible-people-in-a-queue'

test('checks how many people each person can see 1', () => {
  const heights = [10, 6, 8, 5, 11, 9]

  expect(canSeePersonsCount(heights)).toEqual([3, 1, 2, 1, 1, 0])
})

test('checks how many people each person can see 2', () => {
  const heights = [5, 1, 2, 3, 10]

  expect(canSeePersonsCount(heights)).toEqual([4, 1, 1, 1, 0])
})

test('checks how many people each person can see 3', () => {
  const heights = [1, 3, 5, 7, 9]

  expect(canSeePersonsCount(heights)).toEqual([1, 1, 1, 1, 0])
})

test('checks how many people each person can see 4', () => {
  const heights = [5, 3, 2, 6, 7, 1, 0, 4]

  expect(canSeePersonsCount(heights)).toEqual([2, 2, 1, 1, 2, 2, 1, 0])
})
