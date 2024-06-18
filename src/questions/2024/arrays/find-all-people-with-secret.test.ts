import {findAllPeople} from './find-all-people-with-secret'

test('finds all people with a secret 1', () => {
  const n = 6
  const meetings = [
    [1, 2, 5],
    [2, 3, 8],
    [1, 5, 10],
  ]
  const firstPerson = 1

  expect(findAllPeople(n, meetings, firstPerson)).toEqual([0, 1, 2, 3, 5])
})

test('finds all people with a secret 2', () => {
  const n = 4
  const meetings = [
    [3, 1, 3],
    [1, 2, 2],
    [0, 3, 3],
  ]
  const firstPerson = 3

  expect(findAllPeople(n, meetings, firstPerson)).toEqual([0, 1, 3])
})

test('finds all people with a secret 3', () => {
  const n = 5
  const meetings = [
    [3, 4, 2],
    [1, 2, 1],
    [2, 3, 1],
  ]
  const firstPerson = 1

  expect(findAllPeople(n, meetings, firstPerson)).toEqual([0, 1, 2, 3, 4])
})

test('finds all people with a secret 4', () => {
  const n = 4
  const meetings = [
    [1, 2, 2],
    [1, 3, 2],
    [2, 1, 2],
  ]
  const firstPerson = 3

  expect(findAllPeople(n, meetings, firstPerson)).toEqual([0, 1, 2, 3])
})

test('finds all people with a secret 5', () => {
  const n = 4
  const meetings = [
    [1, 2, 2],
    [1, 3, 1],
    [2, 1, 2],
  ]
  const firstPerson = 2

  expect(findAllPeople(n, meetings, firstPerson)).toEqual([0, 1, 2])
})

test('finds all people with a secret 6', () => {
  const n = 5
  const meetings = [
    [1, 4, 3],
    [0, 4, 3],
  ]
  const firstPerson = 3

  expect(findAllPeople(n, meetings, firstPerson)).toEqual([0, 1, 3, 4])
})

test('finds all people with a secret 7', () => {
  const n = 10000
  const meetings = new Array(10000)
    .fill(0)
    .map((_v, index) => [index + 2, index + 1, 1])
  const firstPerson = 1

  expect(findAllPeople(n, meetings, firstPerson)).toEqual(
    new Array(10002).fill(0).map((_v, index) => index),
  )
})

// timeout
test.skip('finds all people with a secret 8', () => {
  const n = 100000
  const meetings = new Array(100000)
    .fill(0)
    .map((_v, index) => [index + 1, 0, 1])
  const firstPerson = 1

  expect(findAllPeople(n, meetings, firstPerson)).toEqual(
    new Array(100000).fill(0).map((_v, index) => index),
  )
})
