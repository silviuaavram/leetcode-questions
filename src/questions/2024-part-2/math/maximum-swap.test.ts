import { maximumSwap } from "./maximum-swap";

test('gets the max number after possible swap 1', () => {
    const num = 2736

    expect(maximumSwap(num)).toEqual(7236)
})

test('gets the max number after possible swap 2', () => {
    const num = 9973

    expect(maximumSwap(num)).toEqual(9973)
})

test('gets the max number after possible swap 3', () => {
    const num = 1919

    expect(maximumSwap(num)).toEqual(9911)
})

test('gets the max number after possible swap 4', () => {
    const num = 9999989

    expect(maximumSwap(num)).toEqual(9999998)
})