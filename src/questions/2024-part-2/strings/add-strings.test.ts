import {addStrings} from './add-strings'

test('adds strings 1', () => {
  const num1 = '11',
    num2 = '123'

  expect(addStrings(num1, num2)).toEqual('134')
})

test('adds strings 2', () => {
  const num1 = '456',
    num2 = '77'

  expect(addStrings(num1, num2)).toEqual('533')
})

test('adds strings 3', () => {
  const num1 = '0',
    num2 = '0'

  expect(addStrings(num1, num2)).toEqual('0')
})

test('adds strings 4', () => {
  const num1 = '123456789',
    num2 = '987654321'

  expect(addStrings(num1, num2)).toEqual('1111111110')
})
