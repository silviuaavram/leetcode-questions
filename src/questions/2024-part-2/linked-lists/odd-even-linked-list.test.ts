import {buildList} from '@utils'
import {oddEvenList} from './odd-even-linked-list'

test('reorders list 1', () => {
  const head = buildList([1, 2, 3, 4, 5])

  expect(oddEvenList(head)).toEqual(buildList([1, 3, 5, 2, 4]))
})

test('reorders list 2', () => {
  const head = buildList([2, 1, 3, 5, 6, 4, 7])

  expect(oddEvenList(head)).toEqual(buildList([2, 3, 6, 7, 1, 5, 4]))
})

test('reorders list 3', () => {
  const head = buildList([2, 1])

  expect(oddEvenList(head)).toEqual(buildList([2, 1]))
})

test('reorders list 4', () => {
  const head = null

  expect(oddEvenList(head)).toEqual(null)
})

test('reorders list 5', () => {
  const head = buildList([1, 2, 3])

  expect(oddEvenList(head)).toEqual(buildList([1, 3, 2]))
})

test('reorders list 6', () => {
  const head = buildList([1, 2, 3, 4])

  expect(oddEvenList(head)).toEqual(buildList([1, 3, 2, 4]))
})
