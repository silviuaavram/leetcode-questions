/**
 * https://leetcode.com/problems/roman-to-integer/description
 * 
 * We just treat conditions where I, X and C could subtract from larger numbers.
 * Apart from them, just add the correspondent from the map.
 */
function romanToInt(s: string): number {
  const lettersMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])

  let result = 0

  for (let index = 0; index < s.length; index++) {
    const letter = s[index]
    const nextLetter = s[index + 1]

    switch (letter) {
      case 'I': {
        if (nextLetter === 'V') {
          result += 4
          index++
        } else if (nextLetter === 'X') {
          result += 9
          index++
        } else {
          result += 1
        }

        break
      }
      case 'X': {
        if (nextLetter === 'L') {
          result += 40
          index++
        } else if (nextLetter === 'C') {
          result += 90
          index++
        } else {
          result += 10
        }

        break
      }
      case 'C': {
        if (nextLetter === 'D') {
          result += 400
          index++
        } else if (nextLetter === 'M') {
          result += 900
          index++
        } else {
          result += 100
        }

        break
      }
      default: {
        result += lettersMap.get(letter)
      }
    }
  }

  return result
}

export {romanToInt}
