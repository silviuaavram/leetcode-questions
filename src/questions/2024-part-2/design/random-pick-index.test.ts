import {Solution} from './random-pick-index'

test('picks indeces randomly', () => {
  const picker = new Solution([1, 2, 3, 3, 3])
  const results = []

  results.push(picker.pick(3))
  results.push(picker.pick(1))
  results.push(picker.pick(1))
  results.push(picker.pick(3))
  results.push(picker.pick(3))
  results.push(picker.pick(3))

  expect(results).toEqual(expect.arrayContaining([0, 0, 2, 3, 4]))
})
