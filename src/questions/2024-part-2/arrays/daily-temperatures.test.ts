import {dailyTemperatures} from './daily-temperatures'

test('checks temperatures 1', () => {
  const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

  expect(dailyTemperatures(temperatures)).toEqual([1, 1, 4, 2, 1, 1, 0, 0])
})

test('checks temperatures 2', () => {
  const temperatures = [30, 40, 50, 60]

  expect(dailyTemperatures(temperatures)).toEqual([1, 1, 1, 0])
})

test('checks temperatures 3', () => {
  const temperatures = [30, 60, 90]

  expect(dailyTemperatures(temperatures)).toEqual([1, 1, 0])
})

test('checks temperatures 4', () => {
  const temperatures = [90, 80, 70, 60, 50, 95]

  expect(dailyTemperatures(temperatures)).toEqual([5, 4, 3, 2, 1, 0])
})

test('checks temperatures 5', () => {
  const temperatures = [90, 80, 70]

  expect(dailyTemperatures(temperatures)).toEqual([0, 0, 0])
})
