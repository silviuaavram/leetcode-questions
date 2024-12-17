import {getLargestOutlier} from './identify-the-largest-outlier-in-an-array'

test('returns largest outlier 1', () => {
  const nums = [2, 3, 5, 10]

  expect(getLargestOutlier(nums)).toEqual(10)
})

test('returns largest outlier 2', () => {
  const nums = [-2, -1, -3, -6, 4]

  expect(getLargestOutlier(nums)).toEqual(4)
})

test('returns largest outlier 3', () => {
  const nums = [1, 1, 1, 1, 1, 5, 5]

  expect(getLargestOutlier(nums)).toEqual(5)
})

test('returns largest outlier 4', () => {
    const nums = [3, 3, 3, 6]
  
    expect(getLargestOutlier(nums)).toEqual(3)
  })