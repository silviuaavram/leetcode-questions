import {longestCommonPrefix} from './longest-common-prefix'

test('finds LCA 1', () => {
  const strs = ['flower', 'flow', 'flight']

  expect(longestCommonPrefix(strs)).toEqual('fl')
})

test('finds LCA 2', () => {
  const strs = ['dog', 'racecar', 'car']

  expect(longestCommonPrefix(strs)).toEqual('')
})

test('finds LCA 3', () => {
  const strs = ['ana', 'anamaria', 'anabelle']

  expect(longestCommonPrefix(strs)).toEqual('ana')
})

test('finds LCA 4', () => {
  const strs = ['xyzt', 'xy', 'xxx']

  expect(longestCommonPrefix(strs)).toEqual('x')
})