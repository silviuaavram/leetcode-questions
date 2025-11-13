/**
 * https://leetcode.com/problems/longest-common-prefix/description
 */
function longestCommonPrefix(strs: string[]): string {
  let index: number

  for (index = 0; index < strs[0].length; index++) {
    for (const str of strs) {
      if (str[index] !== strs[0][index]) {
        return strs[0].slice(0, index)
      }
    }
  }

  return strs[0]
}

export {longestCommonPrefix}
