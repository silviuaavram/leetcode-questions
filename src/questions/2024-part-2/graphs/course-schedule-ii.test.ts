import {findOrder} from './course-schedule-ii'

test('returns the course order 1', () => {
  const numCourses = 2
  const prerequisites = [[1, 0]]

  expect(findOrder(numCourses, prerequisites)).toEqual([0, 1])
})

test('returns the course order 2', () => {
  const numCourses = 4
  const prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]

  expect(findOrder(numCourses, prerequisites)).toEqual([0, 2, 1, 3])
})

test('returns the course order 3', () => {
  const numCourses = 1
  const prerequisites = []

  expect(findOrder(numCourses, prerequisites)).toEqual([0])
})

test('returns the course order 4', () => {
  const numCourses = 2
  const prerequisites = [[0, 1]]

  expect(findOrder(numCourses, prerequisites)).toEqual([1, 0])
})

test('returns the course order 5', () => {
  const numCourses = 2
  const prerequisites = [
    [0, 1],
    [1, 0],
  ]

  expect(findOrder(numCourses, prerequisites)).toEqual([])
})
