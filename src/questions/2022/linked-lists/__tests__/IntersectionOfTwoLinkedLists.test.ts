import {buildList} from '@utils'
import {getIntersectionNode} from '../IntersectionOfTwoLinkedLists'

test('lists intersect at node 8', function intersectAt8() {
  const listA = buildList([4, 1, 8, 4, 5])
  const listB = buildList([5, 6, 1])

  listB.next.next.next = listA.next.next

  expect(getIntersectionNode(listA, listB)).toEqual({
    val: 8,
    next: expect.any(Object),
  })
})
test('lists intersect at node 2', function intersectAt2() {
  const listA = buildList([1, 9, 1, 2, 4])
  const listB = buildList([3])

  listB.next = listA.next.next.next

  expect(getIntersectionNode(listA, listB)).toEqual({
    val: 2,
    next: expect.any(Object),
  })
})

test('lists do not intersect', function doNotIntersect() {
  const listA = buildList([2, 6, 4])
  const listB = buildList([1, 5])

  expect(getIntersectionNode(listA, listB)).toBeNull()
})

test('list does not intersect with null', function doNotIntersectWithNull() {
  const listA = buildList([2, 6, 4])

  expect(getIntersectionNode(listA, null)).toBeNull()
})

test('nulls do not intersect', function nullsDoNotIntersect() {
  expect(getIntersectionNode(null, null)).toBeNull()
})
