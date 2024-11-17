/**
 * https://leetcode.com/problems/generate-parentheses/description
 *
 * We create a generate function which will add one paranthesis or another then pass it on recursively.
 * We can add open paranthesis if we haven't reached the limit.
 * We can add close paranthesis if there are enough open ones so far.
 */

function generateParenthesis(n: number): string[] {
  const result = []

  function generate(open: number, close: number, path: string[]) {
    if (open === 0 && close === 0) {
      result.push(path.join(''))

      return
    }

    if (open !== 0) {
      generate(open - 1, close, [...path, '('])
    }

    if (open < close) {
      generate(open, close - 1, [...path, ')'])
    }
  }

  generate(n, n, [])

  return result
}

export {generateParenthesis}
