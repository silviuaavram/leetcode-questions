/**
 * https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/description
 * 
 * We generate all the possible prefixes in one array and add them to a set.
 * We then generate all prefixes from the other array and check if there's a correspondent in the set.
 */
function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  let result = 0

  const prefixes1 = new Set()

  for (let indexNum = 0; indexNum < arr1.length; indexNum++) {
    const num = String(arr1[indexNum])

    for (let indexDigit = 0; indexDigit < num.length; indexDigit++) {
      prefixes1.add(num.slice(0, indexDigit + 1))
    }
  }

  for (let indexNum = 0; indexNum < arr2.length; indexNum++) {
    const num = String(arr2[indexNum])

    for (let indexDigit = 0; indexDigit < num.length; indexDigit++) {
      const prefix = num.slice(0, indexDigit + 1)

      if (prefixes1.has(prefix)) {
        result = Math.max(result, prefix.length)
      }
    }
  }

  return result
}

export {longestCommonPrefix}
