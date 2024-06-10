import {numSquares} from './perfect-squares'

test('retrieves the least number of perfect squares 1', () => {
    expect(numSquares(12)).toEqual(3)
})

test('retrieves the least number of perfect squares 2', () => {
    expect(numSquares(13)).toEqual(2)
})

test('retrieves the least number of perfect squares 3', () => {
    expect(numSquares(17)).toEqual(2)
})

test('retrieves the least number of perfect squares 4', () => {
    expect(numSquares(16)).toEqual(1)
})

test('retrieves the least number of perfect squares 5', () => {
    expect(numSquares(71)).toEqual(4)
})

test('retrieves the least number of perfect squares 6', () => {
    expect(numSquares(7217)).toEqual(3)
})