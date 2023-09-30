import {buildList} from '@utils'
import {hasCycle} from '../LinkedListCycle'

test('has a cycle in position 1', function cyclePos1() {
  const list = buildList([3, 2, 0, -4])
  list.next.next.next.next = list.next

  expect(hasCycle(list)).toBe(true)
})

test('has a cycle in position 0', function cyclePos0() {
  const list = buildList([1, 2])
  list.next.next = list

  expect(hasCycle(list)).toBe(true)
})

test('has no cycle in 1 value list', function noCycle1() {
  const list = buildList([1])

  expect(hasCycle(list)).toBe(false)
})

test('has no cycle in 6 value list', function noCycle5() {
  const list = buildList([1, 2, 1, 2, 1, 1])

  expect(hasCycle(list)).toBe(false)
})

test('has cycle in 1 value list', function cycle0list() {
  const list = buildList([1])
  list.next = list

  expect(hasCycle(list)).toBe(true)
})
