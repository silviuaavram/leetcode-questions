import {search} from './binary-search'

test('binary searches 1', () => {
  const nums = [-1, 0, 3, 5, 9, 12]
  const target = 9

  expect(search(nums, target)).toEqual(4)
})

test('binary searches 2', () => {
  const nums = [-1, 0, 3, 5, 9, 12]
  const target = 2

  expect(search(nums, target)).toEqual(-1)
})

test('binary searches 3', () => {
  const nums = [5]
  const target = 5

  expect(search(nums, target)).toEqual(0)
})
