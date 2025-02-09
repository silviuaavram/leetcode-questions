/**
 * https://leetcode.com/problems/goat-latin/description
 *
 * We map each word and perform the transform depending if it starts with vower or not.
 */
function toGoatLatin(sentence: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const words = sentence.split(' ')

  return words
    .map((word, index) => {
      if (vowels.has(word[0].toLowerCase())) {
        return `${word}ma${'a'.repeat(index + 1)}`
      } else {
        return `${word.slice(1)}${word[0]}ma${'a'.repeat(index + 1)}`
      }
    })
    .join(' ')
}

export {toGoatLatin}
