/**
 *  https://leetcode.com/problems/valid-word-abbreviation/
 */
function validWordAbbreviation(word: string, abbr: string): boolean {
  const abbrDigits = []

  function parseString(wordIndex: number, abbrIndex: number) {
    // if we finished parsing the word
    if (wordIndex === word.length) {
      // the abbreviation is correct if we reached its end and there's no number in the array.
      return abbrIndex === abbr.length && !abbrDigits.length
    }

    // if any index went off the size (abbreviation number too large), exit.
    if (wordIndex > word.length || abbrIndex > abbr.length) {
      return false
    }

    // if we have a number in abbreviation.
    if (!Number.isNaN(Number(abbr[abbrIndex]))) {
      // if it's a number that starts with 0, exit.
      if (!abbrDigits.length && abbr[abbrIndex] === '0') {
        return false
      }
      // otherwise add it to the digits and move forward with abbreviation only.
      abbrDigits.push(abbr[abbrIndex])

      return parseString(wordIndex, abbrIndex + 1)
    }

    // if we have an abbreviation waiting in the array.
    if (abbrDigits.length) {
      // parse the number, clear the array, move forward with word only.
      const abbrSize = Number(abbrDigits.join(''))
      abbrDigits.length = 0

      return parseString(wordIndex + abbrSize, abbrIndex)
    }

    // if both characters are the same, move forward with both.
    if (word[wordIndex] === abbr[abbrIndex]) {
      return parseString(wordIndex + 1, abbrIndex + 1)
    }

    // if different characters, false.
    return false
  }

  return parseString(0, 0)
}

export {validWordAbbreviation}
