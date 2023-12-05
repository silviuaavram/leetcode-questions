import {removeDuplicates} from '../remove-all-adjacent-duplicates-in-string-ii'

test('removed k duplicates from string 1', () => {
  const s = 'abcd'
  const k = 2
  const expected = 'abcd'

  expect(removeDuplicates(s, k)).toEqual(expected)
})

test('removed k duplicates from string 2', () => {
  const s = 'deeedbbcccbdaa'
  const k = 3
  const expected = 'aa'

  expect(removeDuplicates(s, k)).toEqual(expected)
})

test('removed k duplicates from string 3', () => {
  const s = 'pbbcggttciiippooaais'
  const k = 2
  const expected = 'ps'

  expect(removeDuplicates(s, k)).toEqual(expected)
})
