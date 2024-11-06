/**
 * https://leetcode.com/problems/valid-parentheses/description
 *
 * Use a stack to push open parantheses to.
 * If we find a closing paranthesis, we check if the last popped paranthesis corresponds.
 * If not, we return false. Otherwise we continue the loop.
 * After the loop, we check if we have any leftover open parantheses.
 */
function isValid(s: string): boolean {
  const stack = []

  for (let index = 0; index < s.length; index++) {
    const paranthesis = s[index]

    if (['(', '[', '{'].includes(paranthesis)) {
      stack.push(paranthesis)
    } else {
      const lastOpen = stack.pop()

      if (
        (paranthesis === ')' && lastOpen === '(') ||
        (paranthesis === ']' && lastOpen === '[') ||
        (paranthesis === '}' && lastOpen === '{')
      ) {
        continue
      } else {
        return false
      }
    }
  }

  return stack.length === 0
}

export {isValid}
