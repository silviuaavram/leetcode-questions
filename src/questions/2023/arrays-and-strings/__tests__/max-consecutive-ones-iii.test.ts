import {longestOnes} from '../max-consecutive-ones-iii'

test('longest consecutive substring of 1 with k flips 1', () => {
  const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
  const k = 2

  expect(longestOnes(nums, k)).toEqual(6)
})

test('longest consecutive substring of 1 with k flips 2', () => {
  const nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
  const k = 3

  expect(longestOnes(nums, k)).toEqual(10)
})


test('longest consecutive substring of 1 with k flips 3', () => {
    const nums = [0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]
    const k = 0
  
    expect(longestOnes(nums, k)).toEqual(3)
  })

test('longest consecutive substring of 1 with k flips 3', () => {
    const nums = [0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]
    const k = 1
  
    expect(longestOnes(nums, k)).toEqual(5)
  })