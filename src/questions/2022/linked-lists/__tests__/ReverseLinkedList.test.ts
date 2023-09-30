import {buildList} from '@utils'
import {reverseList} from '../ReverseLinkedList'

test('reverses a 5 node list', function reverse5NodeList() {
  const values = [1, 2, 3, 4, 5]
  const head = buildList(values)

  const reversed = reverseList(head)

  expect(reversed).toEqual(buildList(values.reverse()))
})

test('reverses a 2 node list', function reverse2NodeList() {
  const values = [1, 2]
  const head = buildList(values)

  const reversed = reverseList(head)

  expect(reversed).toEqual(buildList(values.reverse()))
})

test('reverses a 1 node list', function reverse1NodeList() {
  const values = [1]
  const head = buildList(values)

  const reversed = reverseList(head)

  expect(reversed).toEqual(buildList(values.reverse()))
})

test('reverse an empty list', function reverseEmptyList() {
  let failed = false

  try {
    reverseList(null)
  } catch (e) {
    failed = true
  }

  expect(failed).toBe(false)
})
