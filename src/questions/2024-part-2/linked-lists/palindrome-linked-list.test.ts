import {buildList} from '@utils'
import {isPalindrome} from './palindrome-linked-list'

test('checks if list is palindrome 1', () => {
  const head = buildList([1, 2, 2, 1])

  expect(isPalindrome(head)).toEqual(true)
})

test('checks if list is palindrome 2', () => {
  const head = buildList([1, 2])

  expect(isPalindrome(head)).toEqual(false)
})

test('checks if list is palindrome 3', () => {
  const head = buildList([1, 2, 5, 2, 1])

  expect(isPalindrome(head)).toEqual(true)
})
