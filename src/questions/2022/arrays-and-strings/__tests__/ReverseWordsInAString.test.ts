import {reverseWords} from '../ReverseWordsInAString'

test('reverses words in a string', function reverseAString() {
  const s = 'the sky is blue'
  const reversedS = reverseWords(s)

  expect(reversedS).toEqual('blue is sky the')
})

test('reverses words in a string with trailing whitespaces', function reverseAString() {
  const s = '  hello world  '
  const reversedS = reverseWords(s)

  expect(reversedS).toEqual('world hello')
})

test('reverses words in a string with multiple spaces between words', function reverseStringWithMultipleSpaces() {
  const s = 'a good   example'
  const reversedS = reverseWords(s)

  expect(reversedS).toEqual('example good a')
})

test('reverses words in a string with multiple spaces groups between words', function reverseStringWithMultipleSpacesGroips() {
  const s = '     a    very        good   example    '
  const reversedS = reverseWords(s)

  expect(reversedS).toEqual('example good very a')
})

test('removes white spaces', function removeWhiteSpaces() {
  const s = '         '
  const reversedS = reverseWords(s)

  expect(reversedS).toEqual('')
})

test('returns the word', function word() {
  const s = 'alabalaportocala'
  const reversedS = reverseWords(s)

  expect(reversedS).toEqual('alabalaportocala')
})
