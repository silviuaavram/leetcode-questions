import {trap} from './trapping-rain-water'

test('traps rain water 1', () => {
  const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

  expect(trap(height)).toEqual(6)
})

test('traps rain water 2', () => {
  const height = [4, 2, 0, 3, 2, 5]

  expect(trap(height)).toEqual(9)
})

test('traps rain water 3', () => {
  const height = [5,4,3,2,1]

  expect(trap(height)).toEqual(0)
})

test('traps rain water 4', () => {
  const height = [1, 2, 3, 4]

  expect(trap(height)).toEqual(0)
})
