import { minimumOperations } from "./make-array-zero-by-subtracting-equal-amounts";

test('make zeros array 1', () => {
    const nums = [1,5,0,3,5]

    expect(minimumOperations(nums)).toEqual(3)
})

test('make zeros array 2', () => {
    const nums = [0]

    expect(minimumOperations(nums)).toEqual(0)
})

test('make zeros array 3', () => {
    const nums = [1,2,3,4, 5]

    expect(minimumOperations(nums)).toEqual(5)
})

