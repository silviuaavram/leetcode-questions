import {taskSchedulerII} from '../task-scheduler-ii'

test('schedules tasks 1', () => {
  const tasks = [1, 2, 1, 2, 3, 1]
  const space = 3

  expect(taskSchedulerII(tasks, space)).toEqual(9)
})

test('schedules tasks 2', () => {
  const tasks = [5, 8, 8, 5]
  const space = 2

  expect(taskSchedulerII(tasks, space)).toEqual(6)
})
