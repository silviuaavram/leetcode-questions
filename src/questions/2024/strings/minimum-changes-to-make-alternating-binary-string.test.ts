import {minOperations} from './minimum-changes-to-make-alternating-binary-string'

test("minimum operations to make alternating binary string 1", () => {
    const s = "0100"

    expect(minOperations(s)).toEqual(1)
})

test("minimum operations to make alternating binary string 2", () => {
    const s = "0011"

    expect(minOperations(s)).toEqual(2)
})

test("minimum operations to make alternating binary string 3", () => {
    const s = "10"

    expect(minOperations(s)).toEqual(0)
})

test("minimum operations to make alternating binary string 4", () => {
    const s = "1111"

    expect(minOperations(s)).toEqual(2)
})

