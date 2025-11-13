/**
 * https://leetcode.com/problems/merge-strings-alternately/description/
 */
function mergeAlternately(word1: string, word2: string): string {
  const resultArray: string[] = []

  for (let index = 0; index < Math.min(word1.length, word2.length); index++) {
    resultArray.push(word1[index], word2[index])
  }

  const mergedResult = resultArray.join('')

  if (word1.length > word2.length) {
    return `${mergedResult}${word1.slice(word2.length)}`
  }

  if (word2.length > word1.length) {
    return `${mergedResult}${word2.slice(word1.length)}`
  }

  return mergedResult
};

export {mergeAlternately}