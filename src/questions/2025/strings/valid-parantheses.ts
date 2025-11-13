/**
 * https://leetcode.com/problems/valid-parentheses/description
 */
function isValid(s: string): boolean {
  const tokens = s.split('')
  const paranthesesQueue = []

  for (const token of tokens) {
    switch (token) {
      case '(':
      case '[':
      case '{':
        paranthesesQueue.push(token)
        break
      case ')':
        if (paranthesesQueue[paranthesesQueue.length - 1] === '(') {
          paranthesesQueue.pop()
        } else {
          return false
        }
        break
      case ']':
        if (paranthesesQueue[paranthesesQueue.length - 1] === '[') {
          paranthesesQueue.pop()
        } else {
          return false
        }
        break
      case '}':
        if (paranthesesQueue[paranthesesQueue.length - 1] === '{') {
          paranthesesQueue.pop()
        } else {
          return false
        }
        break
      default:
        throw Error('unexpected token')
    }
  }

  return paranthesesQueue.length === 0
}

export {isValid}
