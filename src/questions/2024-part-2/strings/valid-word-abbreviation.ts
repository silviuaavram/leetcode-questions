/**
 * https://leetcode.com/problems/valid-word-abbreviation/description
 *
 * We will get the numbers from the abbreviation in an array.
 * Then, when we go char by char in word, when we encounter a digit, we use the first number stored in the array, and jump that many chars.
 * We resume comparison, incrementing indeces of word and abbreviation.
 * At the end we check if we reached the end of botht the word and the abbreviation.
 */
function validWordAbbreviation(word: string, abbr: string): boolean {
  const numbers = abbr.match(/[0-9]+/g) ?? []

  for (const number of numbers) {
    if (number[0] === '0') {
      return false
    }
  }

  let abbrIndex = 0
  let wordIndex
  for (wordIndex = 0; wordIndex < word.length; wordIndex++) {
    if (wordIndex >= word.length) {
      return false
    }

    if (word[wordIndex] === abbr[abbrIndex]) {
      abbrIndex++

      continue
    }

    if (!isNaN(Number(abbr[abbrIndex]))) {
      const numberAsString = numbers.splice(0, 1)[0]

      wordIndex += Number(numberAsString) - 1
      abbrIndex += numberAsString.length

      continue
    }

    return false
  }

  return wordIndex === word.length && abbrIndex === abbr.length
}

export {validWordAbbreviation}
