import {isValidPalindrome} from './valid-palindrome-iii'

test('checks if palindrome is valid 1', () => {
  const s = 'abcdeca'
  const k = 2

  expect(isValidPalindrome(s, k)).toEqual(true)
})

test('checks if palindrome is valid 2', () => {
  const s = 'abbababa'
  const k = 1

  expect(isValidPalindrome(s, k)).toEqual(true)
})

test('checks if palindrome is valid 3', () => {
  const s = 'abcdeca'
  const k = 1

  expect(isValidPalindrome(s, k)).toEqual(false)
})

test('checks if palindrome is valid 4', () => {
  const s = 'fcgihcgeadfehgiabegbiahbeadbiafgcfchbcacedbificicihibaeehbffeidiaiighceegbfdggggcfaiibefbgeegbcgeadcfdfegfghebcfceiabiagehhibiheddbcgdebdcfegaiahibcfhheggbheebfdahgcfcahafecfehgcgdabbghddeadecidicchfgicbdbecibddfcgbiadiffcifiggigdeedbiiihfgehhdegcaffaggiidiifgfigfiaiicadceefbhicfhbcachacaeiefdcchegfbifhaeafdehicfgbecahidgdagigbhiffhcccdhfdbd'
  const k = 216

  expect(isValidPalindrome(s, k)).toEqual(true)
})
