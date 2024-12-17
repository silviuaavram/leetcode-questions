import { singleNumber } from "./single-number";

test('finds the single number 1', () => {
    const nums = [2,2,1]

    expect(singleNumber(nums)).toEqual(1)
})

test('finds the single number 2', () => {
    const nums = [4,1,2,1,2]

    expect(singleNumber(nums)).toEqual(4)
})

test('finds the single number 3', () => {
    const nums = [1]

    expect(singleNumber(nums)).toEqual(1)
})

test('finds the single number 4', () => {
    const nums = [4,7,4,7,-1]

    expect(singleNumber(nums)).toEqual(-1)
})

