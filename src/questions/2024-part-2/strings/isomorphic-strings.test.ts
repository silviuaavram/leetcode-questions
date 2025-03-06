import { isIsomorphic } from "./isomorphic-strings";

test('checks if strings are isomorphic 1', () => {
    const s = "egg"
    const t = "add"

    expect(isIsomorphic(s, t)).toBe(true)
})

test('checks if strings are isomorphic 2', () => {
    const s = "foo"
    const t = "bar"

    expect(isIsomorphic(s, t)).toBe(false)
})

test('checks if strings are isomorphic 3', () => {
    const s = "paper"
    const t = "title"

    expect(isIsomorphic(s, t)).toBe(true)
})

test('checks if strings are isomorphic 4', () => {
    const s = "badc"
    const t = "baba"

    expect(isIsomorphic(s, t)).toBe(false)
})

