import {validPalindrome} from '../valid-palindrome-ii'

test('checks if valid palindrome 1', () => {
    const s = 'aba'

    expect(validPalindrome(s)).toEqual(true)
})

test('checks if valid palindrome 2', () => {
    const s = 'abca'

    expect(validPalindrome(s)).toEqual(true)
})

test('checks if valid palindrome 3', () => {
    const s = 'abc'

    expect(validPalindrome(s)).toEqual(false)
})

test('checks if valid palindrome 4', () => {
    const s = 'abcxycba'

    expect(validPalindrome(s)).toEqual(true)
})

test('checks if valid palindrome 5', () => {
    const s = 'aabab'

    expect(validPalindrome(s)).toEqual(false)
})