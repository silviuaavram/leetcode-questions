import {climbStairs} from './climbing-stairs'

test('counts the stairs 1', () => {
  const n = 2

  expect(climbStairs(n)).toEqual(2)
})

test('counts the stairs 2', () => {
  const n = 3

  expect(climbStairs(n)).toEqual(3)
})

test('counts the stairs 3', () => {
  const n = 1

  expect(climbStairs(n)).toEqual(1)
})

test('counts the stairs 4', () => {
  const n = 4

  expect(climbStairs(n)).toEqual(5)
})

test('counts the stairs 5', () => {
  const n = 44

  expect(climbStairs(n)).toEqual(1134903170)
})



