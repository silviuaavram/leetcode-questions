/**
 * https://leetcode.com/problems/shifting-letters-ii/description
 * 
 * We need to use the prefix sum to compute the shifts faster.
 * We will use an array of size s.length full of 0 at the start.
 * We use the array like this:
 * 1. for direction 0, start index will be decremented by 1, and end index + 1 will be incremented by 1.
 * 2. for direction 1, start index will be incremented by 1, and end index + 1 will be decremented by 1.
 * When we compute the total shifts, we use a total shift number, and iterate through the shifts array.
 * We add the shift to the total number, then we change the character based on it.
 * This way we account for all the shifts, in a fast manner.
 */
function shiftingLetters(s: string, shifts: number[][]): string {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const lettersIndeces = new Map(
    'abcdefghijklmnopqrstuvwxyz'.split('').map((char, index) => [char, index]),
  )
  const totalShifts = new Array(s.length).fill(0)

  function getShiftedCharacter(character: string, shifts: number): string {
    const characterIndex = lettersIndeces.get(character)
    const indexWithShift = (characterIndex + shifts) % letters.length

    return letters[
      indexWithShift < 0 ? letters.length + indexWithShift : indexWithShift
    ]
  }

  const characters = s.split('')

  for (const [startIndex, endIndex, direction] of shifts) {
    totalShifts[startIndex] += direction === 0 ? -1 : 1

    if (endIndex < s.length - 1) {
      totalShifts[endIndex + 1] += direction === 0 ? 1 : -1
    }
  }

  let currentShift = 0

  for (let index = 0; index < characters.length; index++) {
    currentShift += totalShifts[index]

    characters[index] = getShiftedCharacter(characters[index], currentShift)
  }

  return characters.join('')
}

export {shiftingLetters}
