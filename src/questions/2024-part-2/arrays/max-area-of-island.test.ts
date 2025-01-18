import { maxAreaOfIsland } from "./max-area-of-island";

test('gets max area of island 1', () => {
    const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]

    expect(maxAreaOfIsland(grid)).toEqual(6)
})

test('gets max area of island 2', () => {
    const grid = [[0,0,0,0,0,0,0,0]]

    expect(maxAreaOfIsland(grid)).toEqual(0)
})

test('gets max area of island 3', () => {
    const grid = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,0, 1,0]]

    expect(maxAreaOfIsland(grid)).toEqual(7)
})

test('gets max area of island 3', () => {
    const grid = [[0,1, 1], [0, 1, 1], [0, 0, 1]]

    expect(maxAreaOfIsland(grid)).toEqual(5)
})

