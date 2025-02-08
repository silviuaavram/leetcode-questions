import { uniquePaths } from "./unique-paths";

test('gets unique paths 1', () => {
    const m = 3
    const n = 7

    expect(uniquePaths(m, n)).toEqual(28)
})

test('gets unique paths 2', () => {
    const m = 3
    const n = 2

    expect(uniquePaths(m, n)).toEqual(3)
})

test('gets unique paths 3', () => {
    const m = 1
    const n = 1

    expect(uniquePaths(m, n)).toEqual(1)
})

