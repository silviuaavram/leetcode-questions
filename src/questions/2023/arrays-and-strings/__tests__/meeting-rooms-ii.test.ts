import {minMeetingRooms} from '../meeting-rooms-ii'

test('returns the minimum number of meeting rooms 1', () => {
  const intervals = [
    [0, 30],
    [5, 10],
    [15, 20],
  ]

  expect(minMeetingRooms(intervals)).toEqual(2)
})

test('returns the minimum number of meeting rooms 2', () => {
  const intervals = [
    [7, 10],
    [2, 4],
  ]

  expect(minMeetingRooms(intervals)).toEqual(1)
})

test('returns the minimum number of meeting rooms 3', () => {
  const intervals = [
    [15, 26],
    [0, 30],
    [5, 10],
    [25, 30],
  ]

  expect(minMeetingRooms(intervals)).toEqual(3)
})

test('returns the minimum number of meeting rooms 4', () => {
  const intervals = [
    [13, 15],
    [1, 13],
    [6, 9],
  ]

  expect(minMeetingRooms(intervals)).toEqual(2)
})

test('returns the minimum number of meeting rooms 5', () => {
  const intervals = [
    [13, 15],
    [1, 13],
  ]

  expect(minMeetingRooms(intervals)).toEqual(1)
})
