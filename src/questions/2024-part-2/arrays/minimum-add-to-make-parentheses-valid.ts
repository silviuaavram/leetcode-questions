/**
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description
 *
 * We remove all chars except the parantheses.
 * We use a stack and pop if we find a () combination.
 * Otherwise we push.
 */
function minAddToMakeValid(s: string): number {
  const tokens = s.match(/[()]/g)
  const stack = []

  for (let index = 0; index < tokens.length; index++) {
    const char = tokens[index]

    if (char === ')' && stack[stack.length - 1] === '(') {
      stack.pop()

      continue
    }

    stack.push(char)
  }

  return stack.length
}

export {minAddToMakeValid}
