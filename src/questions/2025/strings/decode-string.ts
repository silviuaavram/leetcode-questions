/**
 * https://leetcode.com/problems/decode-string/description
 */
function decodeString(s: string): string {
  const strings: string[] = ['']
  const numbers: number[] = []
  const numberBuilder: string[] = []

  for (let index = 0; index < s.length; index++) {
    const char = s[index]

    if (/[a-z]/.test(char)) {
      const lastString = strings.pop()
      strings.push(`${lastString}${char}`)

      continue
    }

    if (/[0-9]/.test(char)) {
      numberBuilder.push(char)

      continue
    }

    if (char === '[') {
      numbers.push(Number(numberBuilder.join('')))
      numberBuilder.length = 0
      strings.push('')

      continue
    }

    const lastString = strings.pop()
    const lastNumber = numbers.pop()
    const stringToMerge = strings.pop() ?? ''

    strings.push(`${stringToMerge}${lastString.repeat(lastNumber)}`)
  }

  return strings.join('')
};

export {decodeString}