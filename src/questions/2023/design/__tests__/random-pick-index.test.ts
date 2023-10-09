import {Solution} from '../random-pick-index'

test('returns random indeces of given numbers', () => {
  const values = [1, 2, 3, 3, 3]
  const solution = new Solution(values)

  expect(solution.pick(1)).toEqual(0)
  expect(solution.pick(2)).toEqual(1)

  const solutionsFor3 = []
  solutionsFor3.push(solution.pick(3))
  solutionsFor3.push(solution.pick(3))
  solutionsFor3.push(solution.pick(3))
  solutionsFor3.push(solution.pick(3))
  solutionsFor3.push(solution.pick(3))
  solutionsFor3.push(solution.pick(3))
  solutionsFor3.push(solution.pick(3))
  solutionsFor3.push(solution.pick(3))
  solutionsFor3.push(solution.pick(3))

  expect(solutionsFor3).toEqual(expect.arrayContaining([2, 3, 4]))
})
