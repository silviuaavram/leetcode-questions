/**
 * https://leetcode.com/problems/decode-string/description/
 *
 * We will use a stack to keep the characters we need to multiply.
 * We first need to check digits and build a number since they can be 1-300.
 * When we find [ we build the number and add a stack entry for it.
 * We will add chars in that entry until we find ].
 * When we find ] we will create the string from the last stack entry.
 * We will dump this string in the second to last stack entry, if any, or in the result.
 */

function decodeString(s: string): string {
  const charsStack: {count: number; chars: string[]}[] = []
  const result: string[] = []
  const buildNumber: string[] = []

  for (let index = 0; index < s.length; index++) {
    if (!isNaN(parseInt(s[index]))) {
      buildNumber.push(s[index])

      continue
    }

    if (s[index] === '[') {
      charsStack.push({count: Number(buildNumber.join('')), chars: []})
      buildNumber.length = 0

      continue
    }

    if (s[index] === ']') {
      const {count, chars} = charsStack.pop()
      const string = chars.join('').repeat(count)

      if (charsStack.length === 0) {
        result.push(string)
      } else {
        charsStack[charsStack.length - 1].chars.push(string)
      }

      continue
    }

    if (charsStack.length) {
      charsStack[charsStack.length - 1].chars.push(s[index])
    } else {
      result.push(s[index])
    }
  }

  return result.join('')
}

export {decodeString}
