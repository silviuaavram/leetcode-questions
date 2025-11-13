/**
 * https://leetcode.com/problems/add-binary/description
 */
function addBinary(a: string, b: string): string {
  const digitsA = a.split('').map(Number).reverse()
  const digitsB = b.split('').map(Number).reverse()
  const result = []
  let carry = 0

  for (
    let index = 0;
    index < Math.max(digitsA.length, digitsB.length);
    index++
  ) {
    const sum = (digitsA[index] ?? 0) + (digitsB[index] ?? 0) + carry

    switch (sum) {
      case 3:
        carry = 1
        result[index] = '1'
        break
      case 2:
        carry = 1
        result[index] = '0'
        break
      default:
        carry = 0
        result[index] = sum
    }
  }

  if (carry) {
    result.push('1')
  }

  return result.reverse().join('')
}

export {addBinary}
