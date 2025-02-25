import {frequencySort} from './sort-characters-by-frequency'

test('sorts by frequency 1', () => {
  const s = 'tree'

  expect(frequencySort(s)).toEqual('eetr')
})

test('sorts by frequency 2', () => {
  const s = 'cccaaa'

  expect(frequencySort(s)).toEqual('cccaaa')
})

test('sorts by frequency 3', () => {
  const s = 'Aabb'

  expect(frequencySort(s)).toEqual('bbAa')
})

test('sorts by frequency 4', () => {
  const s = 'abcdefabcaba'

  expect(frequencySort(s)).toEqual('aaaabbbccdef')
})

test('sorts by frequency 5', () => {
  const s = 'eeeeee'

  expect(frequencySort(s)).toEqual('eeeeee')
})


