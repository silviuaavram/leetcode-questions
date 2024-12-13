/**
 * https://leetcode.com/problems/zigzag-conversion/description
 * 
 * We iterate through the characters and put each character on a row in a zig-zag order.
 * We compute the zig-zag index using an index generating function.
 */
function convert(s: string, numRows: number): string {
  const rows = []

  for (let index = 0; index < numRows; index++) {
    rows.push([])
  }

  function generateRowIndexGetter() {
    let increasing = true
    let index = 0

    return function () {
      if (numRows === 1) {
        return 0
      }

      if (index === numRows - 1 && increasing) {
        increasing = false
      }

      if (index === 0 && !increasing) {
        increasing = true
      }

      return increasing ? index++ : index--
    }
  }

  const getRowIndex = generateRowIndexGetter()

  for (let index = 0; index < s.length; index++) {
    const char = s[index]
    const rowIndex = getRowIndex()

    rows[rowIndex].push(char)
  }

  return rows.map(row => row.join('')).join('')
}

export {convert}
