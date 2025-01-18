import { countBinarySubstrings } from "./count-binary-substrings";

test('counts binary substrings 1', () => {
    const s = "00110011"

    expect(countBinarySubstrings(s)).toEqual(6)
})

test('counts binary substrings 2', () => {
    const s = "10101"

    expect(countBinarySubstrings(s)).toEqual(4)
})

test('counts binary substrings 3', () => {
    const s = "1"

    expect(countBinarySubstrings(s)).toEqual(0)
})
test('counts binary substrings 4', () => {
    const s = "0000"

    expect(countBinarySubstrings(s)).toEqual(0)
})

