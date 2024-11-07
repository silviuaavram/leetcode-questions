import {longestCommonPrefix} from './longest-common-prefix'

test('gets longs prefix 1', () => {
  const strs = ['flower', 'flow', 'flight']

  expect(longestCommonPrefix(strs)).toEqual('fl')
})
test('gets longs prefix 2', () => {
  const strs = ['reflow', 'deflow', 'power', 'owe']

  expect(longestCommonPrefix(strs)).toEqual('')
})
test('gets longs prefix 3', () => {
  const strs = ['dog', 'racecar', 'car']

  expect(longestCommonPrefix(strs)).toEqual('')
})

test('gets longs prefix 4', () => {
  const strs = ['caretaker', 'carefree', 'car', 'cliff']

  expect(longestCommonPrefix(strs)).toEqual('c')
})
