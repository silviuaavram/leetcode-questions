import {convert} from './zigzag-conversion'

test('does the zig-zag conversion 1', () => {
    const s = "PAYPALISHIRING"
    const numRows = 3

    expect(convert(s, numRows)).toEqual("PAHNAPLSIIGYIR")
})

test('does the zig-zag conversion 2', () => {
    const s = "PAYPALISHIRING"
    const numRows = 4

    expect(convert(s, numRows)).toEqual("PINALSIGYAHRPI")
})

test('does the zig-zag conversion 3', () => {
    const s = "A"
    const numRows = 1

    expect(convert(s, numRows)).toEqual("A")
})

test('does the zig-zag conversion 4', () => {
    const s = "AB"
    const numRows = 1

    expect(convert(s, numRows)).toEqual("AB")
})

