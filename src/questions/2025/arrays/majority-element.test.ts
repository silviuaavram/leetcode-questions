import {majorityElement} from './majority-element'

test('finds majority element 1', () => {
  const nums = [3, 2, 3]

  expect(majorityElement(nums)).toEqual(3)
})

test('finds majority element 2', () => {
  const nums = [2, 2, 1, 1, 1, 2, 2]

  expect(majorityElement(nums)).toEqual(2)
})
