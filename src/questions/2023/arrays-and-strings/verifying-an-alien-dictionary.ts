/**
 * https://leetcode.com/problems/verifying-an-alien-dictionary/
 */
function isAlienSorted(words: string[], order: string): boolean {
  const dictionary = new Map<string, number>()

  for (let index = 0; index < order.length; index++) {
    dictionary.set(order[index], index)
  }

  for (let indexWord = 0; indexWord < words.length - 1; indexWord++) {
    const word1 = words[indexWord]
    const word2 = words[indexWord + 1]
    let isSorted = false

    for (
      let indexCharacter = 0;
      indexCharacter < Math.min(word1.length, word2.length);
      indexCharacter++
    ) {
      const orderCharacter1 = dictionary.get(word1[indexCharacter])
      const orderCharacter2 = dictionary.get(word2[indexCharacter])

      if (orderCharacter1 > orderCharacter2) {
        return false
      }

      if (orderCharacter1 < orderCharacter2) {
        isSorted = true
        break
      }
    }

    if (!isSorted && word1.length > word2.length) {
      return false
    }
  }

  return true
}

export {isAlienSorted}
