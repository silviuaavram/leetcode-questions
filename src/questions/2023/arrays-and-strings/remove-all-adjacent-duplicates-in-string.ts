/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 */
function removeDuplicates(s: string): string {
  const characters = s.split('')

  for (let index = 0; index < characters.length; index++) {
    if (characters[index] === characters[index - 1]) {
      characters.splice(index - 1, 2)

      index -= 2
    }
  }

  return characters.join('')
}

export {removeDuplicates}
