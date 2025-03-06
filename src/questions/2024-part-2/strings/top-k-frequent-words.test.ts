import {topKFrequent} from './top-k-frequent-words'

test('gets most frequent k words 1', () => {
  const words = ['i', 'love', 'leetcode', 'i', 'love', 'coding']
  const k = 2

  expect(topKFrequent(words, k)).toEqual(['i', 'love'])
})

test('gets most frequent k words 2', () => {
  const words = [
    'the',
    'day',
    'is',
    'sunny',
    'the',
    'the',
    'the',
    'sunny',
    'is',
    'is',
  ]
  const k = 4

  expect(topKFrequent(words, k)).toEqual(['the', 'is', 'sunny', 'day'])
})
