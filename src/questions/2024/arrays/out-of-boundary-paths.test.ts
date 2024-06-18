import {findPaths} from './out-of-boundary-paths'

test('returns the number of paths 1', () => {
  expect(findPaths(2, 2, 2, 0, 0)).toEqual(6)
})

test('returns the number of paths 2', () => {
  expect(findPaths(1, 3, 3, 0, 1)).toEqual(12)
})

test('returns the number of paths 3', () => {
  expect(findPaths(3, 3, 2, 0, 0)).toEqual(4)
})

test('returns the number of paths 4', () => {
  expect(findPaths(8, 7, 16, 1, 5)).toEqual(102984580)
})

test('returns the number of paths 5', () => {
  expect(findPaths(2, 3, 8, 1, 0)).toEqual(1104)
})

test('returns the number of paths 6', () => {
  expect(findPaths(8, 50, 23, 5, 26)).toEqual(914783380)
})

test('returns the number of paths 7', () => {
  expect(findPaths(36, 5, 50, 15, 3)).toEqual(390153306)
})
