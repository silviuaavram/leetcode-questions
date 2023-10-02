import {SparseVector} from '../dot-product-of-two-sparse-vectors'

test('computes the product of two sparse vectors 1', () => {
  const nums1 = [1, 0, 0, 2, 3]
  const nums2 = [0, 3, 0, 4, 0]
  const v1 = new SparseVector(nums1)
  const v2 = new SparseVector(nums2)

  expect(v1.dotProduct(v2)).toEqual(8)
})

test('computes the product of two sparse vectors 2', () => {
  const nums1 = [0, 1, 0, 0, 0]
  const nums2 = [0, 0, 0, 0, 2]
  const v1 = new SparseVector(nums1)
  const v2 = new SparseVector(nums2)

  expect(v1.dotProduct(v2)).toEqual(0)
})

test('computes the product of two sparse vectors 3', () => {
  const nums1 = [0, 1, 0, 0, 2, 0, 0]
  const nums2 = [1, 0, 0, 0, 3, 0, 4]
  const v1 = new SparseVector(nums1)
  const v2 = new SparseVector(nums2)

  expect(v1.dotProduct(v2)).toEqual(6)
})
