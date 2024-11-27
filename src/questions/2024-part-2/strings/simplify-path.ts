/**
 * https://leetcode.com/problems/simplify-path/description
 *
 * We tokenize the string and remove empty tokens (those are // or /// etc).
 * For each . we remove it from the tokens.
 * For each .. we remove it from the tokens, and if there's a token behind it, we remove that as well.
 * Finally we merge the tokens.
 */

function simplifyPath(path: string): string {
  const tokens = path.split('/').filter(Boolean)

  for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index]

    switch (token) {
      case '.': {
        tokens.splice(index, 1)
        index--
        break
      }
      case '..': {
        tokens.splice(index, 1)
        index--

        if (index >= 0) {
          tokens.splice(index, 1)
          index--
        }
        break
      }
      default: {
        // do nothing
      }
    }
  }

  return '/' + tokens.join('/')
}

export {simplifyPath}
