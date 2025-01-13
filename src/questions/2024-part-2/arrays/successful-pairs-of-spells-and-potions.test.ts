import {successfulPairs} from './successful-pairs-of-spells-and-potions'

test('checks combinations 1', () => {
  const spells = [5, 1, 3]
  const potions = [1, 2, 3, 4, 5]
  const success = 7

  expect(successfulPairs(spells, potions, success)).toEqual([4, 0, 3])
})

test('checks combinations 2', () => {
  const spells = [3, 1, 2]
  const potions = [8, 5, 8]
  const success = 16

  expect(successfulPairs(spells, potions, success)).toEqual([2, 0, 2])
})
