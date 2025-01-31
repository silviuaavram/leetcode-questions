import { minWindow } from "./minimum-window-substring";

test('gets minimum window 1', () => {
    const s = "ADOBECODEBANC"
    const t = "ABC"

    expect(minWindow(s,t )).toEqual("BANC")
})

test('gets minimum window 2', () => {
    const s = "a"
    const t = "a"

    expect(minWindow(s,t )).toEqual("a")
})

test('gets minimum window 3', () => {
    const s = "a"
    const t = "aa"

    expect(minWindow(s,t )).toEqual("")
})