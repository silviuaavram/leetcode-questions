import {openLock} from './open-the-lock'

test('combinations to open lock 1', () => {
  const deadends = ['0201', '0101', '0102', '1212', '2002']
  const target = '0202'

  expect(openLock(deadends, target)).toEqual(6)
})

test('combinations to open lock 2', () => {
  const deadends = ['8888']
  const target = '0009'

  expect(openLock(deadends, target)).toEqual(1)
})

test('combinations to open lock 3', () => {
  const deadends = [
    '8887',
    '8889',
    '8878',
    '8898',
    '8788',
    '8988',
    '7888',
    '9888',
  ]
  const target = '8888'

  expect(openLock(deadends, target)).toEqual(-1)
})
