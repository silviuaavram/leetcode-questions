import {topKFrequent} from './top-k-frequent-elements'

test('finds top k frequent elements 1', () => {
  const nums = [1, 1, 1, 2, 2, 3]
  const k = 2

  expect(topKFrequent(nums, k)).toEqual([1, 2])
})

test('finds top k frequent elements 2', () => {
  const nums = [1]
  const k = 1

  expect(topKFrequent(nums, k)).toEqual([1])
})

test('finds top k frequent elements 3', () => {
  const nums = [1, 2, 1, 2, 1, 2, 3, 1, 3, 2]
  const k = 2

  expect(topKFrequent(nums, k)).toEqual([1, 2])
})

test('finds top k frequent elements 4', () => {
  const nums = [1, 1, 2, 2, 3, 3, 4, 4, 4]
  const k = 1

  expect(topKFrequent(nums, k)).toEqual([4])
})

test('finds top k frequent elements 5', () => {
  const nums = [1, 1, 2, 2, 3, 3, 4]
  const k = 4

  expect(topKFrequent(nums, k)).toEqual([1, 2, 3, 4])
})
