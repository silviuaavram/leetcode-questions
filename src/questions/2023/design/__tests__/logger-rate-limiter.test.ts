import {Logger} from '../logger-rate-limiter'

test('logs messages while throttleing 1', () => {
  const logger = new Logger()

  expect(logger.shouldPrintMessage(1, 'foo')).toEqual(true) // return true, next allowed timestamp for "foo" is 1 + 10 = 11
  expect(logger.shouldPrintMessage(2, 'bar')).toEqual(true) // return true, next allowed timestamp for "bar" is 2 + 10 = 12
  expect(logger.shouldPrintMessage(3, 'foo')).toEqual(false) // 3 < 11, return false
  expect(logger.shouldPrintMessage(8, 'bar')).toEqual(false) // 8 < 12, return false
  expect(logger.shouldPrintMessage(10, 'foo')).toEqual(false) // 10 < 11, return false
  expect(logger.shouldPrintMessage(11, 'foo')).toEqual(true) // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21
})
