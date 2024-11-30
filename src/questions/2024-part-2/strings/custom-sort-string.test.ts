import {customSortString} from './custom-sort-string'

test('sorts string 1', () => {
  const order = 'cba'
  const s = 'abcd'

  expect(customSortString(order, s)).toEqual('cbad')
})

test('sorts string 2', () => {
  const order = 'bcafg'
  const s = 'abcd'

  expect(customSortString(order, s)).toEqual('bcad')
})

test('sorts string 3', () => {
  const order = 'exv'
  const s = 'xwvee'

  expect(customSortString(order, s)).toEqual('eexvw')
})
