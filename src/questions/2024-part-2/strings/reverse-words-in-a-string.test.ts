import {reverseWords} from './reverse-words-in-a-string'

test('reverses words 1', () => {
  const s = 'the sky is blue'

  expect(reverseWords(s)).toEqual('blue is sky the')
})

test('reverses words 2', () => {
  const s = '  hello world  '

  expect(reverseWords(s)).toEqual('world hello')
})

test('reverses words 1', () => {
  const s = 'a good   example'

  expect(reverseWords(s)).toEqual('example good a')
})
