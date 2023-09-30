import {buildList} from '@utils'
import {addTwoNumbers} from '../AddTwoNumbers'

test('adds 342 and 465', function add342And465() {
  const l1 = buildList([2, 4, 3])
  const l2 = buildList([5, 6, 4])
  const expected = buildList([7, 0, 8])

  expect(addTwoNumbers(l1, l2)).toEqual(expected)
})

test('adds 0 and 0', function add0And0() {
  const l1 = buildList([0])
  const l2 = buildList([0])
  const expected = buildList([0])

  expect(addTwoNumbers(l1, l2)).toEqual(expected)
})

test('adds 9999999 and 9999', function add9999999And9999() {
  const l1 = buildList([9, 9, 9, 9, 9, 9, 9])
  const l2 = buildList([9, 9, 9, 9])
  const expected = buildList([8, 9, 9, 9, 0, 0, 0, 1])

  expect(addTwoNumbers(l1, l2)).toEqual(expected)
})

test('adds 123 and empty list', function addEmptyList() {
  const l1 = buildList([1, 2, 3])

  expect(addTwoNumbers(l1, null)).toEqual(l1)
})
