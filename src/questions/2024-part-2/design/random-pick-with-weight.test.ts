import {Solution} from './random-pick-with-weight'

test('picks numbers with weight 1', () => {
  const picker = new Solution([1])

  expect(picker.pickIndex()).toEqual(0)
})

test('picks numbers with weight 2', () => {
  const picker = new Solution([1, 3])
  const results = []

  results.push(picker.pickIndex())
  results.push(picker.pickIndex())
  results.push(picker.pickIndex())
  results.push(picker.pickIndex())

  expect(results).toEqual(expect.arrayContaining([1, 1, 1, 0]))
})

test('picks numbers with weight 3', () => {
  const picker = new Solution([1, 3, 1])
  const results = []

  results.push(picker.pickIndex())
  results.push(picker.pickIndex())
  results.push(picker.pickIndex())
  results.push(picker.pickIndex())
  results.push(picker.pickIndex())

  expect(results).toEqual(expect.arrayContaining([1, 1, 1, 0, 2]))
})
