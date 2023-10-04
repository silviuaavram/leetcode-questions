import { customSortString } from "../custom-sort-string";

test('permutes the string according to the order 1', () => {
   const order = "cba"
   const s = "abcd"
   const result = "cbad"

   expect(customSortString(order, s)).toEqual(result)
})

test('permutes the string according to the order 2', () => {
   const order = "cbafg"
   const s = "abcd"
   const result = "cbad"

   expect(customSortString(order, s)).toEqual(result)
})

test('permutes the string according to the order 3', () => {
    const order = "cbafg"
    const s = "abcdbacc"
    const result = "cccbbaad"
 
    expect(customSortString(order, s)).toEqual(result)
 })
 
 