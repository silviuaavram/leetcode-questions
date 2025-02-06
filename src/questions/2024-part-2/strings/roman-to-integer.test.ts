import { romanToInt } from "./roman-to-integer";

test('converts roman number 1', () => {
    const s = "III"

    expect(romanToInt(s)).toEqual(3)
})

test('converts roman number 2', () => {
    const s = "LVIII"

    expect(romanToInt(s)).toEqual(58)
})

test('converts roman number 3', () => {
    const s = "MCMXCIV"

    expect(romanToInt(s)).toEqual(1994)
})

test('converts roman number 4', () => {
    const s = "MMCCCXCIX"

    expect(romanToInt(s)).toEqual(2399)
})
