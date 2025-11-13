import {buildList} from '@utils'
import {addTwoNumbers} from './add-two-numbers'

test('adds 2 linked lists 1', () => {
  const l1 = buildList([2, 4, 3])
  const l2 = buildList([5, 6, 4])

  expect(addTwoNumbers(l1, l2)).toEqual(buildList([7, 0, 8]))
})

test('adds 2 linked lists 2', () => {
  const l1 = buildList([0])
  const l2 = buildList([0])

  expect(addTwoNumbers(l1, l2)).toEqual(buildList([0]))
})

test('adds 2 linked lists 3', () => {
  const l1 = buildList([9, 9, 9, 9, 9, 9, 9])
  const l2 = buildList([9, 9, 9, 9])

  expect(addTwoNumbers(l1, l2)).toEqual(buildList([8, 9, 9, 9, 0, 0, 0, 1]))
})

test('adds 2 linked lists 4', () => {
  const l1 = buildList([2, 4, 9])
  const l2 = buildList([5, 6, 4, 9])

  expect(addTwoNumbers(l1, l2)).toEqual(buildList([7, 0, 4, 0, 1]))
})

test('adds 2 linked lists 5', () => {
  const l1 = buildList([9,9,1])
  const l2 = buildList([1])

  expect(addTwoNumbers(l1, l2)).toEqual(buildList([0, 0, 2]))
})
