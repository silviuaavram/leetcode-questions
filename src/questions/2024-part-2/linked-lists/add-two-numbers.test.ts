import {buildList} from '@utils'
import {addTwoNumbers} from './add-two-numbers'

test('adds 2 numbers 1', () => {
  const l1 = buildList([2, 4, 3])
  const l2 = buildList([5, 6, 4])

  const result = addTwoNumbers(l1, l2)

  expect(result.val).toEqual(7)
  expect(result.next.val).toEqual(0)
  expect(result.next.next.val).toEqual(8)
})

test('adds 2 numbers 2', () => {
  const l1 = buildList([0])
  const l2 = buildList([0])

  const result = addTwoNumbers(l1, l2)

  expect(result.val).toEqual(0)
})

test('adds 2 numbers 3', () => {
  const l1 = buildList([9, 9, 9, 9, 9, 9, 9])
  const l2 = buildList([9, 9, 9, 9])

  const result = addTwoNumbers(l1, l2)

  expect(result.val).toEqual(8)
  expect(result.next.val).toEqual(9)
  expect(result.next.next.val).toEqual(9)
  expect(result.next.next.next.val).toEqual(9)
  expect(result.next.next.next.next.val).toEqual(0)
  expect(result.next.next.next.next.next.val).toEqual(0)
  expect(result.next.next.next.next.next.next.val).toEqual(0)
  expect(result.next.next.next.next.next.next.next.val).toEqual(1)
})

test('adds 2 numbers 4', () => {
  const l1 = buildList([0])
  const l2 = buildList([1, 1, 1])

  const result = addTwoNumbers(l1, l2)

  expect(result.val).toEqual(1)
  expect(result.next.val).toEqual(1)
  expect(result.next.next.val).toEqual(1)
})

test('adds 2 numbers 5', () => {
  const l1 = buildList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
  const l2 = buildList([5,6,4])

  const result = addTwoNumbers(l1, l2)

  expect(result.val).toEqual(6)
  expect(result.next.val).toEqual(6)
  expect(result.next.next.val).toEqual(4)
})
