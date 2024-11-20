import {decodeString} from './decode-strings'

test('decodes string 1', () => {
  const s = '3[a]2[bc]'

  expect(decodeString(s)).toEqual('aaabcbc')
})

test('decodes string 2', () => {
  const s = '3[a2[c]]'

  expect(decodeString(s)).toEqual('accaccacc')
})

test('decodes string 3', () => {
  const s = '2[abc]3[cd]ef'

  expect(decodeString(s)).toEqual('abcabccdcdcdef')
})

test('decodes string 4', () => {
    const s = '10[a2[c]]'
  
    expect(decodeString(s)).toEqual('accaccaccaccaccaccaccaccaccacc')
  })
