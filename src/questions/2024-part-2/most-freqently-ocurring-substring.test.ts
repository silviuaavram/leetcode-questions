import { mostFrequentlyOcurringSubstring } from "./most-freqently-ocurring-substring";

test('returns null if n is greater than str length', () => {
  const str = 'abc'
  const n = 4

  expect(mostFrequentlyOcurringSubstring(str, n)).toBeNull()
})

test('returns "in" ', () => {
  const str = 'inengineering'
  const n = 2

  expect(mostFrequentlyOcurringSubstring(str, n)).toBe('in')
})

test('returns "ab" ', () => {
  const str = 'ababcdcd'
  const n = 2

  expect(mostFrequentlyOcurringSubstring(str, n)).toBe('ab')
})

test('returns "ababcdcd"', () => {
  const str = 'ababcdcd'
  const n = str.length

  expect(mostFrequentlyOcurringSubstring(str, n)).toBe('ababcdcd')
})

test('returns null if n is 0', () => {
  const str = 'ababcdcd'
  const n = 0

  expect(mostFrequentlyOcurringSubstring(str, n)).toBeNull()
})

test('returns "b"', () => {
  const str = 'abababb'
  const n = 1

  expect(mostFrequentlyOcurringSubstring(str, n)).toBe('b')
})