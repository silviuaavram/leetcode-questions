import {twoSum} from '../TwoSum'

test('finds elements that sum up to 9', function twoSum9() {
  const nums = [2, 7, 11, 15]
  const target = 9
  const expected = [0, 1]

  expect(twoSum(nums, target)).toEqual(expected)
})

test('finds elements that sum up to 6', function twoSum6() {
  const nums = [3, 2, 4]
  const target = 6
  const expected = [1, 2]

  expect(twoSum(nums, target)).toEqual(expected)
})

test('finds identical elements that sum up to 6', function twoSum6SameElements() {
  const nums = [3, 3]
  const target = 6
  const expected = [0, 1]

  expect(twoSum(nums, target)).toEqual(expected)
})
