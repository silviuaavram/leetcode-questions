/**
 * https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/description
 *
 * The subsequence of a string is a new string that is formed from the original by deleting some chars (or not) and keeping the char order.
 * For example, ad is a subsequence of abcd, since we can delete bc.
 * In our solution, we check char by char, for both strings, and check if the char is the same or can be flipped.
 * If so, then it means that char from str1 is part of the subsequence str2.
 * If not, we try the next char from str1.
 */

function canMakeSubsequence(str1: string, str2: string): boolean {
  const chars = 'abcdefghijklmnopqrstuvwxyz'

  function areCharsCompliant(char1: string, char2: string): boolean {
    const index1 = chars.indexOf(char1)
    const index2 = chars.indexOf(char2)

    if (index1 === index2) {
      return true
    }

    return index1 === index2 - 1 || (char1 === 'z' && char2 === 'a')
  }

  let index1 = 0
  let index2 = 0

  while (index1 < str1.length) {
    if (areCharsCompliant(str1[index1], str2[index2])) {
      index2++
    }

    index1++
  }

  return index2 === str2.length
}

export {canMakeSubsequence}
