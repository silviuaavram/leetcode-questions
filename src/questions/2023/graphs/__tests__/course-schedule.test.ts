import {canFinish} from '../course-schedule'

test('courses can be finished 1', () => {
  const numCourses = 2
  const prerequisites = [[1, 0]]

  expect(canFinish(numCourses, prerequisites)).toEqual(true)
})

test('courses can be finished 2', () => {
  const numCourses = 2
  const prerequisites = [
    [1, 0],
    [0, 1],
  ]

  expect(canFinish(numCourses, prerequisites)).toEqual(false)
})

test('courses can be finished 3', () => {
  const numCourses = 3
  const prerequisites = [[1, 0]]

  expect(canFinish(numCourses, prerequisites)).toEqual(true)
})

test('courses can be finished 4', () => {
  const numCourses = 4
  const prerequisites = [
    [0, 1],
    [1, 2],
    [0, 2],
    [1, 3],
    [2, 3],
  ]

  expect(canFinish(numCourses, prerequisites)).toEqual(true)
})

test('courses can be finished 5', () => {
  const numCourses = 4
  const prerequisites = [
    [0, 1],
    [1, 2],
    [0, 2],
    [3, 1],
    [2, 3],
  ]

  expect(canFinish(numCourses, prerequisites)).toEqual(false)
})

test('courses can be finished 6', () => {
  const numCourses = 20
  const prerequisites = [
    [0, 10],
    [3, 18],
    [5, 5],
    [6, 11],
    [11, 14],
    [13, 1],
    [15, 1],
    [17, 4],
  ]

  expect(canFinish(numCourses, prerequisites)).toEqual(false)
})

test('courses can be finished 7', () => {
  const numCourses = 5
  const prerequisites = [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ]

  expect(canFinish(numCourses, prerequisites)).toEqual(true)
})

test('courses can be finished 8', () => {
  const numCourses = 8
  const prerequisites = [
    [1, 0],
    [2, 6],
    [1, 7],
    [6, 4],
    [7, 0],
    [0, 5],
  ]

  expect(canFinish(numCourses, prerequisites)).toEqual(true)
})

test('courses can be finished 9', () => {
  const numCourses = 7
  const prerequisites = [
    [1, 0],
    [0, 3],
    [0, 2],
    [3, 2],
    [2, 5],
    [4, 5],
    [5, 6],
    [2, 4],
  ]

  expect(canFinish(numCourses, prerequisites)).toEqual(true)
})
