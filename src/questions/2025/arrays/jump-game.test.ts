import {canJump} from './jump-game'

test('checks if it can jump to last index 1', () => {
  const nums = [2, 3, 1, 1, 4]

  expect(canJump(nums)).toEqual(true)
})

test('checks if it can jump to last index 2', () => {
  const nums = [3, 2, 1, 0, 4]

  expect(canJump(nums)).toEqual(false)
})

test('checks if it can jump to last index 3', () => {
  const nums = [3, 3, 1, 0, 0, 2]

  expect(canJump(nums)).toEqual(false)
})
