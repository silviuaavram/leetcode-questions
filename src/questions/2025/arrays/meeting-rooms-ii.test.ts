import {minMeetingRooms} from './meeting-rooms-ii'

test('returns minimum number of meeting rooms 1', () => {
  const intervals = [
    [0, 30],
    [5, 10],
    [15, 20],
  ]

  expect(minMeetingRooms(intervals)).toEqual(2)
})

test('returns minimum number of meeting rooms 2', () => {
  const intervals = [
    [7, 10],
    [2, 4],
  ]

  expect(minMeetingRooms(intervals)).toEqual(1)
})

test('returns minimum number of meeting rooms 3', () => {
  const intervals = [
    [0, 30],
    [5, 20],
    [15, 20],
  ]

  expect(minMeetingRooms(intervals)).toEqual(3)
})

test('returns minimum number of meeting rooms 4', () => {
  const intervals = [
    [0, 30],
    [35, 45],
    [46, 48],
  ]

  expect(minMeetingRooms(intervals)).toEqual(1)
})

test('returns minimum number of meeting rooms 5', () => {
  const intervals = [
    [0, 30],
    [5, 10],
    [10, 30],
    [30, 40],
  ]

  expect(minMeetingRooms(intervals)).toEqual(2)
})

test('returns minimum number of meeting rooms 6', () => {
  const intervals = [
    [13, 15],
    [1, 13],
  ]

  expect(minMeetingRooms(intervals)).toEqual(1)
})
