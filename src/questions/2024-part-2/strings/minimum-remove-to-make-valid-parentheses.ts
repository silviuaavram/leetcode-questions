/**
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description
 *
 * We use a stack to keep track of the parantheses and pop if we get a () combination.
 * Otherwise we push the paranthesis with its index.
 * Finally we remove each paranthesis based on the indeces we saved.
 * Since we are remove chars, we will decrease the index to remove at every step.
 */
function minRemoveToMakeValid(s: string): string {
  const toRemove: {char: '(' | ')'; index: number}[] = []

  for (let index = 0; index < s.length; index++) {
    const char = s[index]
    const lastCharToRemove = toRemove[toRemove.length - 1]?.char

    if (char === '(') {
      toRemove.push({char, index})
    } else if (char === ')') {
      if (lastCharToRemove === '(') {
        toRemove.pop()
      } else {
        toRemove.push({char, index})
      }
    }
  }

  const chars = s.split('')
  let removedSoFar = 0

  for (const {index} of toRemove) {
    chars.splice(index - removedSoFar, 1)
    removedSoFar++
  }

  return chars.join('')
}

export {minRemoveToMakeValid}
