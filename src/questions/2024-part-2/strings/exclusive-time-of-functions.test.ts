import {exclusiveTime} from './exclusive-time-of-functions'

test('gets execution time 1', () => {
  const n = 2
  const logs = ['0:start:0', '1:start:2', '1:end:5', '0:end:6']

  expect(exclusiveTime(n, logs)).toEqual([3, 4])
})

test('gets execution time 2', () => {
  const n = 1
  const logs = [
    '0:start:0',
    '0:start:2',
    '0:end:5',
    '0:start:6',
    '0:end:6',
    '0:end:7',
  ]

  expect(exclusiveTime(n, logs)).toEqual([8])
})

test('gets execution time 3', () => {
  const n = 2
  const logs = [
    '0:start:0',
    '0:start:2',
    '0:end:5',
    '1:start:6',
    '1:end:6',
    '0:end:7',
  ]

  expect(exclusiveTime(n, logs)).toEqual([7, 1])
})
