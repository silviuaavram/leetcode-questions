import {arrayRankTransform} from '../rank-transform-of-an-array'

test('replaces numbers with rank 1', () => {
  const arr = [40, 10, 20, 30]
  const result = [4, 1, 2, 3]

  expect(arrayRankTransform(arr)).toEqual(result)
})

test('replaces numbers with rank 2', () => {
  const arr = [100, 100, 100]
  const result = [1, 1, 1]

  expect(arrayRankTransform(arr)).toEqual(result)
})

test('replaces numbers with rank 3', () => {
  const arr = [37, 12, 28, 9, 100, 56, 80, 5, 12]
  const result = [5, 3, 4, 2, 8, 6, 7, 1, 3]

  expect(arrayRankTransform(arr)).toEqual(result)
})
