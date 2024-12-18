import {StatisticsTracker} from './design-an-array-statistics-tracker'

test('tracks statistics 1', () => {
  const statisticsTracker = new StatisticsTracker()

  statisticsTracker.addNumber(4) // The data structure now contains [4]
  statisticsTracker.addNumber(4) // The data structure now contains [4, 4]
  statisticsTracker.addNumber(2) // The data structure now contains [4, 4, 2]
  statisticsTracker.addNumber(3) // The data structure now contains [4, 4, 2, 3]

  expect(statisticsTracker.getMean()).toEqual(3) // return 3
  expect(statisticsTracker.getMedian()).toEqual(4) // return 4
  expect(statisticsTracker.getMode()).toEqual(4) // return 4
  statisticsTracker.removeFirstAddedNumber() // The data structure now contains [4, 2, 3]
  expect(statisticsTracker.getMode()).toEqual(2) // return 2
})

test('tracks statistics 2', () => {
  const statisticsTracker = new StatisticsTracker()

  statisticsTracker.addNumber(9) // The data structure now contains [9]
  statisticsTracker.addNumber(5) // The data structure now contains [9, 5]
  expect(statisticsTracker.getMean()).toEqual(7) // return 7
  statisticsTracker.removeFirstAddedNumber() // The data structure now contains [5]
  statisticsTracker.addNumber(5) // The data structure now contains [5, 5]
  statisticsTracker.addNumber(6) // The data structure now contains [5, 5, 6]
  statisticsTracker.removeFirstAddedNumber() // The data structure now contains [5, 6]
  expect(statisticsTracker.getMedian()).toEqual(6) // return 6
  statisticsTracker.addNumber(8) // The data structure now contains [5, 6, 8]
  expect(statisticsTracker.getMode()).toEqual(5) // return 5
})

test('tracks statistics 3', () => {
  const statisticsTracker = new StatisticsTracker()

  statisticsTracker.addNumber(7) // The data structure now contains [7]
  statisticsTracker.addNumber(6) // The data structure now contains [7, 6]
  expect(statisticsTracker.getMean()).toEqual(6) // return 6
  expect(statisticsTracker.getMedian()).toEqual(7) // return 7
  statisticsTracker.addNumber(7) // The data structure now contains [7,6,7]
  expect(statisticsTracker.getMean()).toEqual(6) // return 6
  expect(statisticsTracker.getMedian()).toEqual(7) // return 7
  statisticsTracker.addNumber(6) // The data structure now contains [7,6,7,6]
  statisticsTracker.addNumber(8) // The data structure now contains [7,6,7,6,8]
  statisticsTracker.removeFirstAddedNumber() // The data structure now contains [6,7,6,8]
  expect(statisticsTracker.getMean()).toEqual(6) // return 6
})
