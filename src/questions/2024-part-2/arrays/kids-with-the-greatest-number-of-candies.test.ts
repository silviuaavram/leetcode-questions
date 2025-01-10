import {kidsWithCandies} from './kids-with-the-greatest-number-of-candies'

test('checks kids with candies 1', () => {
  const candies = [2, 3, 5, 1, 3]
  const extraCandies = 3

  expect(kidsWithCandies(candies, extraCandies)).toEqual([
    true,
    true,
    true,
    false,
    true,
  ])
})

test('checks kids with candies 2', () => {
  const candies = [4, 2, 1, 1, 2]
  const extraCandies = 1

  expect(kidsWithCandies(candies, extraCandies)).toEqual([
    true,
    false,
    false,
    false,
    false,
  ])
})

test('checks kids with candies 3', () => {
  const candies = [12, 1, 12]
  const extraCandies = 10

  expect(kidsWithCandies(candies, extraCandies)).toEqual([true, false, true])
})
