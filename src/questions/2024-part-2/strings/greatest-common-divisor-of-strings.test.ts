import { gcdOfStrings } from "./greatest-common-divisor-of-strings";

test('common divisor of strings 1', () => {
    const str1 = "ABCABC"
    const str2 = "ABC"

    expect(gcdOfStrings(str1, str2)).toEqual("ABC")
})

test('common divisor of strings 1', () => {
    const str1 = "ABABAB"
    const str2 = "ABAB"

    expect(gcdOfStrings(str1, str2)).toEqual("AB")
})

test('common divisor of strings 1', () => {
    const str1 = "LEET"
    const str2 = "CODE"

    expect(gcdOfStrings(str1, str2)).toEqual("")
})

