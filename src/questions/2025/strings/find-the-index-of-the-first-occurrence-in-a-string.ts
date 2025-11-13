/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description
 */
function strStr(haystack: string, needle: string): number {
  for (let indexSearch = 0; indexSearch < haystack.length - needle.length + 1; indexSearch++) {
    for (let index = 0; index < needle.length; index++) {
      if (haystack[indexSearch + index] !== needle[index]) {
        break
      }

      if (index === needle.length - 1) {
        return indexSearch
      }
    }
  }

  return -1
};

export {strStr}