import {topKFrequent} from '../top-k-frequent-elements'

test('returns the top k frequent elements 1', () => {
  const nums = [1, 1, 1, 2, 2, 3]
  const k = 2

  expect(topKFrequent(nums, k)).toEqual([1, 2])
})

test('returns the top k frequent elements 2', () => {
  const nums = [1]
  const k = 1

  expect(topKFrequent(nums, k)).toEqual([1])
})

test('returns the top k frequent elements 3', () => {
  const nums = [1, 1, 1, 2, 2, 3, 2, 22, 2, 3, 3, 2, 1, 3, 2, 2, 3, 3, 2]
  const k = 2

  expect(topKFrequent(nums, k)).toEqual([2, 3])
})
