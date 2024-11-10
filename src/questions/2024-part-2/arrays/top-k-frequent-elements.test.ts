import {topKFrequent} from './top-k-frequent-elements'

test('returns the most K frequent numbers 1', () => {
  const nums = [1, 1, 1, 2, 2, 3]
  const k = 2

  expect(topKFrequent(nums, k)).toEqual([1, 2])
})

test('returns the most K frequent numbers 2', () => {
  const nums = [1]
  const k = 1

  expect(topKFrequent(nums, k)).toEqual([1])
})

test('returns the most K frequent numbers 3', () => {
  const nums = [1,1,2,2,3,3,2,2,3,3,3,1]
  const k = 2

  expect(topKFrequent(nums, k)).toEqual([3, 2])
})
