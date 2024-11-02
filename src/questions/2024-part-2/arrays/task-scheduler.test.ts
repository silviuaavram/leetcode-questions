import {leastInterval} from './task-scheduler'

test('task scheduler 1', () => {
  const tasks = ['A', 'A', 'A', 'B', 'B', 'B']
  const n = 2

  expect(leastInterval(tasks, n)).toEqual(8)
})

test('task scheduler 2', () => {
  const tasks = ['A', 'C', 'A', 'B', 'D', 'B']
  const n = 1

  expect(leastInterval(tasks, n)).toEqual(6)
})

test('task scheduler 3', () => {
  const tasks = ['A', 'A', 'A', 'B', 'B', 'B']
  const n = 3

  expect(leastInterval(tasks, n)).toEqual(10)
})

test('task scheduler 4', () => {
  const tasks = ['B', 'C', 'D', 'A', 'A', 'A', 'A', 'G']

  const n = 1

  expect(leastInterval(tasks, n)).toEqual(8)
})

test('task scheduler 5', () => {
  const tasks = ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'E']

  const n = 2

  expect(leastInterval(tasks, n)).toEqual(12)
})
