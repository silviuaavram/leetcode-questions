import {jump} from './jump-game-ii'

test('returns the minimum number of jumps 1', () => {
  const nums = [2, 3, 1, 1, 4]

  expect(jump(nums)).toBe(2)
})

test('returns the minimum number of jumps 2', () => {
  const nums = [2, 3, 0, 1, 4]

  expect(jump(nums)).toBe(2)
})

test('returns the minimum number of jumps 3', () => {
  const nums = [1, 1, 1, 1]

  expect(jump(nums)).toBe(3)
})

test('returns the minimum number of jumps 4', () => {
  const nums = [1, 1, 1, 3, 1, 1]

  expect(jump(nums)).toBe(4)
})

test('returns the minimum number of jumps 5', () => {
  const nums = [0]

  expect(jump(nums)).toBe(0)
})

test('returns the minimum number of jumps 6', () => {
  const nums = [1, 0]

  expect(jump(nums)).toBe(1)
})

test('returns the minimum number of jumps 6', () => {
  const nums = [5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]

  expect(jump(nums)).toBe(3)
})
