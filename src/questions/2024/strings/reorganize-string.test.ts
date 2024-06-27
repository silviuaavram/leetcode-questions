import {reorganizeString} from './reorganize-string'

test('reorganizez string 1', () => {
  const s = 'aab'

  expect(reorganizeString(s)).toEqual('aba')
})

test('reorganizez string 2', () => {
  const s = 'aaab'

  expect(reorganizeString(s)).toEqual('')
})

test('reorganizez string 3', () => {
  const s = 'aabaaabbb'

  expect(reorganizeString(s)).toEqual('ababababa')
})

test('reorganizez string 4', () => {
  const s = 'a'

  expect(reorganizeString(s)).toEqual('a')
})

test('reorganizez string 5', () => {
  const s = 'b'

  expect(reorganizeString(s)).toEqual('b')
})

test('reorganizez string 6', () => {
  const s = 'vvvlo'

  expect(reorganizeString(s)).toEqual('vlvov')
})

test('reorganizez string 7', () => {
  const s = 'aattgggyyyyy'

  expect(reorganizeString(s)).toEqual('ygygyaytytag')
})
