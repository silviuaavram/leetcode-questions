import { maxScore } from "./maximum-score-after-splitting-a-string";

test('returns max score 1', () => {
    const s = "011101"

    expect(maxScore(s)).toEqual(5)
})

test('returns max score 2', () => {
    const s = "00111"

    expect(maxScore(s)).toEqual(5)
})

test('returns max score 3', () => {
    const s = "1111"

    expect(maxScore(s)).toEqual(3)
})

test('returns max score 4', () => {
    const s = "1100"

    expect(maxScore(s)).toEqual(1)
})

test('returns max score 5', () => {
    const s = "10"

    expect(maxScore(s)).toEqual(0)
})



