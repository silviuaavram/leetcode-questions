import {Solution} from '../random-pick-with-weight'

test('picks random numbers with weight 1', () => {
  const solution = new Solution([1])

  expect(solution.pickIndex()).toEqual(0)
})

test('picks random numbers with weight 2', () => {
  const solution = new Solution([1, 3])
  const result = []

  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())

  expect(result).toEqual(expect.arrayContaining([1, 1, 1, 1, 1, 0]))
})

test('picks random numbers with weight 3', () => {
  const solution = new Solution([1, 2, 3])
  const result = []

  // running the pickIndex 18 times (6 probabilities 3 times) should probably make the test pass.
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())
  result.push(solution.pickIndex())

  expect(result).toEqual(expect.arrayContaining([0, 1, 1, 2, 2, 2]))
})
