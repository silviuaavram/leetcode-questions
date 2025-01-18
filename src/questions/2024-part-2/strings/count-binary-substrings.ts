/**
 * https://leetcode.com/problems/count-binary-substrings/description
 * 
 * We generate groups from the string.
 * For instance 1110011000 will be [3,2,2,3].
 * Then we iterate 2 by 2 and add the minimum between values to the result.
 */
function countBinarySubstrings(s: string): number {
  if (s.length < 2) {
    return 0
  }

  const groups = []
  let currentChar = s[0]
  let currentGroup = 1

  for (let index = 1; index < s.length; index++) {
    if (s[index] === currentChar) {
        currentGroup++
    } else {
        groups.push(currentGroup)
        currentGroup = 1
        currentChar = s[index]
    }
  }

  groups.push(currentGroup)

  if (groups.length === 1) {
    return 0
  }

  let result = 0

  for (let index = 1; index < groups.length; index++) {
    result += Math.min(groups[index - 1], groups[index])
  }

  return result
}

export {countBinarySubstrings}
