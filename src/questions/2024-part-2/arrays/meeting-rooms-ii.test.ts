import {minMeetingRooms} from './meeting-rooms-ii'

test('returns the min number of meeting rooms 1', () => {
  const intervals = [
    [0, 30],
    [5, 10],
    [15, 20],
  ]

  expect(minMeetingRooms(intervals)).toEqual(2)
})

test('returns the min number of meeting rooms 2', () => {
  const intervals = [
    [7, 10],
    [2, 4],
  ]

  expect(minMeetingRooms(intervals)).toEqual(1)
})

test('returns the min number of meeting rooms 3', () => {
  const intervals = [
    [2, 3],
    [3, 4],
    [4,5],
    [5,6]
  ]

  expect(minMeetingRooms(intervals)).toEqual(1)
})

test('returns the min number of meeting rooms 4', () => {
  const intervals = [
    [1, 10],
    [1, 10],
    [1, 10],
    [1, 10],
    [5,6]
  ]

  expect(minMeetingRooms(intervals)).toEqual(5)
})

test('returns the min number of meeting rooms 5', () => {
  const intervals = [[13,15],[1,13]]

  expect(minMeetingRooms(intervals)).toEqual(1)
})
