/**
 * https://leetcode.com/problems/string-compression/description
 * 
 * We just parse the chars and check if the char changed or not.
 * If it changed, we just need to be careful with the indeces.
 * We need to update the chars, the new result length, and the index within the iteration, since we probably shortened the string.
 * We also need to remember to do the operation one last time after the iteration.
 */
function compress(chars: string[]): number {
  let result = chars.length
  let currentChar = chars[0]
  let count = 1

  for (let index = 1; index < chars.length; index++) {
    if (chars[index] === currentChar) {
      count++
    } else {
      currentChar = chars[index]

      if (count > 1) {
        const countChars = String(count).split('')

        chars.splice(index - count + 1, count - 1, ...countChars)

        index = index - (count - 1 - countChars.length)
        result = result - (count - 1 - countChars.length)
      }

      count = 1
    }
  }

  if (count > 1) {
    const countChars = String(count).split('')

    chars.splice(chars.length - count + 1, count - 1, ...countChars)

    result = result - (count - 1 - countChars.length)
  }

  return result
}

export {compress}
