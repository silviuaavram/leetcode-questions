import {productExceptSelf} from './product-of-array-except-self'

test('returns the products 1', () => {
  const nums = [1, 2, 3, 4]

  expect(productExceptSelf(nums)).toEqual([24, 12, 8, 6])
})

test('returns the products 2', () => {
  const nums = [-1, 1, 0, -3, 3]

  expect(productExceptSelf(nums)).toEqual([0, 0, 9, 0, 0])
})
