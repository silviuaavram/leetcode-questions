/**
 * https://leetcode.com/problems/strobogrammatic-number/description
 *
 * We check with 2 pointers.
 * The adjacent characters need to be both 0, 1, 8, or one of them 6 while the other 9.
 */
function isStrobogrammatic(num: string): boolean {
  for (let index = 0; index < Math.ceil(num.length / 2); index++) {
    const char1 = num[index]
    const char2 = num[num.length - 1 - index]

    if (char1 === '1' && char2 === '1') {
      continue
    }

    if (char1 === '8' && char2 === '8') {
      continue
    }

    if (char1 === '6' && char2 === '9') {
      continue
    }

    if (char1 === '9' && char2 === '6') {
      continue
    }

    if (char1 === '0' && char2 === '0') {
      continue
    }

    return false
  }

  return true
}

export {isStrobogrammatic}
