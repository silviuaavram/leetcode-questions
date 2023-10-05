import {maximumSwap} from '../maximum-swap'

test('swaps 2 with 7', () => {
  expect(maximumSwap(2736)).toEqual(7236)
})

test('swaps nothing', () => {
  expect(maximumSwap(9973)).toEqual(9973)
})

test('swaps the second 9 with 4', () => {
  expect(maximumSwap(4123919)).toEqual(9123914)
})

test('swaps nothing on 0', () => {
  expect(maximumSwap(0)).toEqual(0)
})

test('swaps nothing on 321', () => {
  expect(maximumSwap(321)).toEqual(321)
})

test('swaps 3 and 7 on 883672', () => {
  expect(maximumSwap(883672)).toEqual(887632)
})

test('swaps 3 and 8 on 98368', () => {
  expect(maximumSwap(98368)).toEqual(98863)
})

test('swaps 1 and the second 9 on 1993', () => {
  expect(maximumSwap(1993)).toEqual(9913)
})
