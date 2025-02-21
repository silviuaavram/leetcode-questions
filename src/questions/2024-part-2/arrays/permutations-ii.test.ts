import {permuteUnique} from './permutations-ii'

test('returns unique permutations 1', () => {
  const nums = [1, 1, 2]

  expect(permuteUnique(nums)).toEqual([
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
  ])
})

test('returns unique permutations 2', () => {
  const nums = [1, 2, 3]

  expect(permuteUnique(nums)).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ])

  // 1 2 3
  // 1 [2,3], 2 [1, 3], 3 [1, 2]
  // 1 2 [3], 1 3 [2], 2 1 [3], 2 3 [1], 3 1 [2], 3 2 [1]
  
})
