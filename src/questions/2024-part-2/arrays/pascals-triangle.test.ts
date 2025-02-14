import {generate} from './pascals-triangle'

test("generates Pascal's triangle 1", () => {
  const numRows = 5

  expect(generate(numRows)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ])
})
test("generates Pascal's triangle 2", () => {
  const numRows = 1

  expect(generate(numRows)).toEqual([[1]])
})
