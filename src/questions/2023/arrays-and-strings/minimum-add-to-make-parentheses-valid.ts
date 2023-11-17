/**
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 */
function minAddToMakeValid(s: string): number {
  let openParantheses = 0
  let result = 0

  for (let index = 0; index < s.length; index++) {
    const char = s[index]

    if (char === '(') {
      openParantheses++
    } else {
      if (openParantheses > 0) {
        openParantheses--
      } else {
        result++
      }
    }
  }

  return result + openParantheses
}

export {minAddToMakeValid}
