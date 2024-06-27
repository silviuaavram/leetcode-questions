/**
 * https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description
 */
export function maxLength(arr: string[]): number {
  let result = 0
  const checked = new Set()

  function checkConcatenation(concatenation: string, currentIndex: number) {
    if (checked.has(concatenation)) {
      return
    }

    checked.add(concatenation)

    const concatenationSet = new Set(concatenation)

    if (concatenationSet.size === concatenation.length) {
      result = Math.max(result, concatenation.length)
    }

    for (let index = currentIndex + 1; index < arr.length; index++) {
      checkConcatenation(`${concatenation}${arr[index]}`, index)
    }
  }

  for (let index = 0; index < arr.length; index++) {
    checkConcatenation(arr[index], index)
  }

  return result
}
