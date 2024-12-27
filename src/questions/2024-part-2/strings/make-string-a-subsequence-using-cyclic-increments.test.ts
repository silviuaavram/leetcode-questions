import { canMakeSubsequence } from "./make-string-a-subsequence-using-cyclic-increments";

test('checks if it can create a subsequence 1', () => {
    const str1 = "abc", str2 = "ad"

    expect(canMakeSubsequence(str1, str2)).toEqual(true)
})

test('checks if it can create a subsequence 2', () => {
    const str1 = "zc", str2 = "ad"

    expect(canMakeSubsequence(str1, str2)).toEqual(true)
})

test('checks if it can create a subsequence 3', () => {
    const str1 = "ab", str2 = "d"

    expect(canMakeSubsequence(str1, str2)).toEqual(false)
})

test('checks if it can create a subsequence 4', () => {
    const str1 = "abcdemn", str2 = "mn"

    expect(canMakeSubsequence(str1, str2)).toEqual(true)
})

