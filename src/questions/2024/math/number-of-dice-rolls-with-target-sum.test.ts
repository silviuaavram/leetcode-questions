import {numRollsToTarget} from './number-of-dice-rolls-with-target-sum'

test('number of rolls to target 1', () => {
  const n = 1
  const k = 6
  const target = 3

  expect(numRollsToTarget(n, k, target)).toEqual(1)
})

test('number of rolls to target 2', () => {
  const n = 2
  const k = 6
  const target = 7

  expect(numRollsToTarget(n, k, target)).toEqual(6)
})

test('number of rolls to target 3', () => {
  const n = 30
  const k = 30
  const target = 500

  expect(numRollsToTarget(n, k, target)).toEqual(222616187)
})

test('number of rolls to target 4', () => {
  const n = 2
  const k = 3
  const target = 3

  expect(numRollsToTarget(n, k, target)).toEqual(2)
})
