/**
 * https://leetcode.com/problems/merge-strings-alternately/description
 *
 *
 */
function mergeAlternately(word1: string, word2: string): string {
  const resultArray = []
  let index

  for (index = 0; index < Math.min(word1.length, word2.length); index++) {
    resultArray.push(word1[index], word2[index])
  }

  return (
    resultArray.join('') +
    (word1.length >= word2.length ? word1 : word2).slice(index)
  )
}

export {mergeAlternately}
