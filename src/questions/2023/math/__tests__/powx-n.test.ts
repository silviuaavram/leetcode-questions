import {myPow} from '../powx-n'

test('2^10 is 1024', () => {
  expect(myPow(2, 10)).toEqual(1024)
})

test('2.1^3 is 9.261', () => {
  expect(Math.floor(myPow(2.1, 3) * 1000) / 1000).toEqual(9.261)
})

test('2^-2 is 0.25', () => {
  expect(myPow(2, -2)).toEqual(0.25)
})
