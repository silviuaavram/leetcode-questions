import {reorganizeString} from './reorganize-string'

test('reorganizes string 1', () => {
  const s = 'aab'
  expect(reorganizeString(s)).toEqual('aba')
})

test('reorganizes string 2', () => {
  const s = 'aaab'
  expect(reorganizeString(s)).toEqual('')
})

test('reorganizes string 3', () => {
  const s = 'aaabbb'
  expect(reorganizeString(s)).toEqual('ababab')
})

test('reorganizes string 4', () => {
  const s = 'baaabc'
  expect(reorganizeString(s)).toEqual('ababac')
})

test('reorganizes string 5', () => {
  const s = 'aabbcc'
  expect(reorganizeString(s)).toEqual('abacbc')
})

