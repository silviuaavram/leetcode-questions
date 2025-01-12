import { isSubsequence } from "./is-subsequence";

test('checks if s is subsequence of t 1', () => {
    const s = "abc"
    const t = "ahbgdc"

    expect(isSubsequence(s, t)).toEqual(true)
})

test('checks if s is subsequence of t 2', () => {
    const s = "axc"
    const t = "ahbgdc"

    expect(isSubsequence(s, t)).toEqual(false)
})

test('checks if s is subsequence of t 3', () => {
    const s = "axc"
    const t = "ahbgdxc"

    expect(isSubsequence(s, t)).toEqual(true)
})

