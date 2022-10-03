import {buildList} from '..'

test('builds list', function buildListWithValues() {
  const values = [1, 2, 3,]
  const list = buildList(values)

  expect(list.val).toEqual(values[0])
  expect(list.next.val).toEqual(values[1])
  expect(list.next.next.val).toEqual(values[2])
  expect(list.next.next.next).toBeNull()
})
