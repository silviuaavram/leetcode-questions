import {buildTree} from '@utils'
import {amountOfTime} from './amount-of-time-for-binary-tree-to-be-infected'

test('minutes to infection 1', () => {
  const root = buildTree([1, 5, 3, null, 4, 10, 6, 9, 2])
  const start = 3

  expect(amountOfTime(root, start)).toEqual(4)
})

test('minutes to infection 2', () => {
  const root = buildTree([1])
  const start = 1

  expect(amountOfTime(root, start)).toEqual(0)
})
