import {findMissingRanges} from './missing-ranges'

test('finds missing ranges 1', () => {
  const nums = [0, 1, 3, 50, 75]
  const lower = 0
  const upper = 99

  expect(findMissingRanges(nums, lower, upper)).toEqual([
    [2, 2],
    [4, 49],
    [51, 74],
    [76, 99],
  ])
})

test('finds missing ranges 2', () => {
  const nums = [-1]
  const lower = -1
  const upper = -1

  expect(findMissingRanges(nums, lower, upper)).toEqual([])
})

test('finds missing ranges 3', () => {
  const nums = [1, 3, 50, 75, 99]
  const lower = 0
  const upper = 99

  expect(findMissingRanges(nums, lower, upper)).toEqual([
    [0, 0],
    [2, 2],
    [4, 49],
    [51, 74],
    [76, 98],
  ])
})

test('finds missing ranges 4', () => {
    const nums = []
    const lower = 1
    const upper = 100
  
    expect(findMissingRanges(nums, lower, upper)).toEqual([[1, 100]])
  })
