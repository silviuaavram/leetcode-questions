/**
 * https://leetcode.com/problems/longest-common-prefix/description
 *
 * We assume the longest prefix is the the whole first string.
 * We cut the prefix from the back as much as needed.
 * The check is using the indexOf function, and expecting it to equal 0 if there's a common prefix.
 * If we still have a non empty prefix between 2 strings, we move to the next string and repeat.
 */
function longestCommonPrefix(strs: string[]): string {
  let result = strs[0]

  for (let index = 1; index < strs.length; index++) {
    while (strs[index].indexOf(result) !== 0) {
        result = result.slice(0, result.length - 1)

        if (result === '') {
            return result
        }
    }
    
  }

  return result
}

export {longestCommonPrefix}
