/**
 * https://leetcode.com/problems/move-pieces-to-obtain-a-string/description
 * 
 * We save the indeces of L and R in the start string.
 * We go through target string and check:
 * 1. If char is L, check if in start there's an L to the right and there's no R before that L.
 * 2. If char is R, check if in start there's an R to the left and there's no L after that R.
 * Basically we check in start if we can move the next R/L correctly.
 */
function canChange(start: string, target: string): boolean {
  const charOrder = {L: [], R: []}
  const size = start.length

  for (let index = 0; index < size; index++) {
    const char = start[index]

    if (char === 'L') {
      charOrder['L'].push(index)
    }
    if (char === 'R') {
      charOrder['R'].push(index)
    }
  }

  for (let index = 0; index < size; index++) {
    const char = target[index]

    if (char === 'L') {
      const startLIndex = charOrder['L'][0]
      const startRIndex = charOrder['R'][0]

      if (
        index <= startLIndex &&
        (startRIndex === undefined || startRIndex > startLIndex)
      ) {
        charOrder['L'].splice(0, 1)

        continue
      }

      return false
    }

    if (char === 'R') {
      const startLIndex = charOrder['L'][0]
      const startRIndex = charOrder['R'][0]

      if (
        index >= startRIndex &&
        (startLIndex === undefined || startLIndex > startRIndex)
      ) {
        charOrder['R'].splice(0, 1)

        continue
      }

      return false
    }
  }

  return charOrder['L'].length === 0 && charOrder['R'].length === 0
}

export {canChange}
