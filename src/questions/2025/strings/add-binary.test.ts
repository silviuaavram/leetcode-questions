import { addBinary } from "./add-binary";

test('adds 2 binary numbers 1', () => {
  const a = "11"
  const b = "1"

  expect(addBinary(a, b)).toEqual('100')
})

test('adds 2 binary numbers 2', () => {
  const a = "1010"
  const b = "1011"

  expect(addBinary(a, b)).toEqual('10101')
})

