import {MovingAverage} from './moving-average-from-data-stream'

test('gets the moving average of data stream', () => {
  const movingAverage = new MovingAverage(3)

  expect(movingAverage.next(1)).toEqual(1.0) // return 1.0 = 1 / 1
  expect(movingAverage.next(10)).toEqual(5.5) // return 5.5 = (1 + 10) / 2
  expect(movingAverage.next(3)).toEqual(4.66667) // return 4.66667 = (1 + 10 + 3) / 3
  expect(movingAverage.next(5)).toEqual(6.0) // return 6.0 = (10 + 3 + 5) / 3
})
