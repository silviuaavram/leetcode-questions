import {searchMatrix} from '../SearchA2DMatrix'

test('searches for existing element on 0x1', function searchExisting0x1() {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ]
  const target = 3

  expect(searchMatrix(matrix, target)).toBe(true)
})

test('searches for non-existing element 13', function searchNonExisting13() {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ]
  const target = 13

  expect(searchMatrix(matrix, target)).toBe(false)
})

test('searches for existing element on 2x3', function searchExisting2x3() {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ]
  const target = 60

  expect(searchMatrix(matrix, target)).toBe(true)
})

test('searches for non-existing element 66', function searchNonExisting66() {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ]
  const target = 66

  expect(searchMatrix(matrix, target)).toBe(false)
})
