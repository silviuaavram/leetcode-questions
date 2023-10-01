/**
 * https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
 */
function minRemoveToMakeValid(s: string): string {
  const parantheses: {index: number; char: string}[] = []

  // have a parantheses stack
  for (let index = 0; index < s.length; index++) {
    const char = s[index]

    // if open paran, push to stack.
    if (char === '(') {
      parantheses.push({char: '(', index})
    }

    // if close paran, and we can pop an open paran, then pop it.
    if (char === ')') {
      if (parantheses[parantheses.length - 1]?.char === '(') {
        parantheses.pop()
      } else {
        // otherwise, push the close paran.
        parantheses.push({char: ')', index})
      }
    }
  }

  const indecesToRemove = parantheses.map(p => p.index)
  let result = s
  let offset = 0

  // remove the parantheses, increment an offset that needs to be used as the result shrinks at each removal.
  for (let index = 0; index < indecesToRemove.length; index++) {
    const indexToRemove = indecesToRemove[index]

    result = result
      .slice(0, indexToRemove - offset)
      .concat(result.slice(indexToRemove + 1 - offset))

    offset++
  }

  return result
}

export {minRemoveToMakeValid}
