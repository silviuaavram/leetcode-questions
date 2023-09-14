import {findMin} from '../FindMinimumInRotatedSortedArray'

test('finds 1 in the array', function find1() {
  const nums = [3, 4, 5, 1, 2]

  expect(findMin(nums)).toBe(1)
})
test('finds 0 in the array', function find0() {
  const nums = [4, 5, 6, 7, 0, 1, 2]

  expect(findMin(nums)).toBe(0)
})
test('finds 11 in the array', function find11() {
  const nums = [11, 13, 15, 17]

  expect(findMin(nums)).toBe(11)
})

test('finds 9 in the array', function find9() {
  const nums = [11, 13, 15, 17, 22, 9]

  expect(findMin(nums)).toBe(9)
})

test('finds 22 in the array', function find22() {
  const nums = [22]

  expect(findMin(nums)).toBe(22)
})
