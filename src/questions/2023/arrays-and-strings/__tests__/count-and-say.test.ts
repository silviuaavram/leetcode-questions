import {countAndSay} from '../count-and-say'

test('count and say 1', () => {
  expect(countAndSay(1)).toEqual('1')
})

test('count and say 2', () => {
  expect(countAndSay(4)).toEqual('1211')
})

test('count and say 3', () => {
  expect(countAndSay(5)).toEqual('111221')
})

test('count and say 4', () => {
  expect(countAndSay(6)).toEqual('312211')
})
