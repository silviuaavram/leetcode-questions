/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description
 * 
 * We start with a string that's the smaller of the 2.
 * We check if it can be the divisor for both strings.
 * If so, we return it.
 * Otherwise, we chop one character and try again.
 */
function gcdOfStrings(str1: string, str2: string): string {
  const length1 = str1.length
  const length2 = str2.length
  let base = length1 < length2 ? str1 : str2

  while (base.length) {
    if (length1 % base.length === 0 && length2 % base.length === 0) {
        const multiply1 = length1 / base.length
        const multiply2 = length2 / base.length

        if (str1 === base.repeat(multiply1) && str2 === base.repeat(multiply2)) {
            return base
        }
    }

    base = base.slice(0, -1)
  }



  return ''
}

export {gcdOfStrings}
