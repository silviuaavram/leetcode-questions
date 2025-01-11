/**
 * https://leetcode.com/problems/reverse-words-in-a-string/description
 *
 * It's just too tedious to do it using a mutable string.
 * Just split the string by empty spaces, filter empty strings, reverse the array and join.
 */
function reverseWords(s: string): string {
  return s.split(/\W+/g).filter(Boolean).reverse().join(' ')
}

export {reverseWords}
