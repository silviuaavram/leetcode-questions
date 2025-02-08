/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description
 * 
 * We use a stack to check duplicate adjacents as we go.
 */
function removeDuplicates(s: string): string {
  const chars = s.split('')
  const resultStack = []

  for (let index = 0; index < s.length; index++) {
    const lastCharAdded = resultStack[resultStack.length - 1] ?? ''

    if (lastCharAdded === chars[index]) {
      resultStack.pop()
    } else {
      resultStack.push(chars[index])
    }
  }

  return resultStack.join('')
}

export {removeDuplicates}
