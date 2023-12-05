/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
 */
function removeDuplicates(s: string, k: number): string {
  const result = s.split('')
  const stack: number[] = []

  // keep a stack with occurances as values.
  for (let index = 0; index < result.length; index++) {
    // if two characters match, increment the tip of the stack
    if (result[index] === result[index - 1]) {
      stack[stack.length - 1]++

      // if the tip is k, pop it and remove the last k chars from the string
      if (stack[stack.length - 1] === k) {
        stack.pop()

        result.splice(index - k + 1, k)

        index = index - k // go back since the array has shrunk by k positions
      }
    } else {
      // otherwise add a 1 to the top
      stack.push(1)
    }
  }

  return result.join('')
}

export {removeDuplicates}
