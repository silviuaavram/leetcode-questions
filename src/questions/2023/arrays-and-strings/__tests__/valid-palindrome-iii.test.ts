import {isValidPalindrome} from '../valid-palindrome-iii'

test('is a valid palindrome 1', () => {
  const s = 'abcdeca'
  const k = 2

  expect(isValidPalindrome(s, k)).toEqual(true)
})

test('is a valid palindrome 2', () => {
  const s = 'abbababa'
  const k = 1

  expect(isValidPalindrome(s, k)).toEqual(true)
})

test('is a valid palindrome 3', () => {
  const s = 'abc'
  const k = 1

  expect(isValidPalindrome(s, k)).toEqual(false)
})

test('is a valid palindrome 4', () => {
  const s = 'abccba'
  const k = 0

  expect(isValidPalindrome(s, k)).toEqual(true)
})

test('is a valid palindrome 5', () => {
  const s = 'xabtyccba'
  const k = 3

  expect(isValidPalindrome(s, k)).toEqual(true)
})

test('is a valid palindrome 6', () => {
  const s = 'xabtyccba'
  const k = 2

  expect(isValidPalindrome(s, k)).toEqual(false)
})

test('is a valid palindrome 7', () => {
  const s =
    'fcgihcgeadfehgiabegbiahbeadbiafgcfchbcacedbificicihibaeehbffeidiaiighceegbfdggggcfaiibefbgeegbcgeadcfdfegfghebcfceiabiagehhibiheddbcgdebdcfegaiahibcfhheggbheebfdahgcfcahafecfehgcgdabbghddeadecidicchfgicbdbecibddfcgbiadiffcifiggigdeedbiiihfgehhdegcaffaggiidiifgfigfiaiicadceefbhicfhbcachacaeiefdcchegfbifhaeafdehicfgbecahidgdagigbhiffhcccdhfdbd'
  const k = 216

  expect(isValidPalindrome(s, k)).toEqual(true)
})


