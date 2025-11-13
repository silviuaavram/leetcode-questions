/**
 * https://leetcode.com/problems/roman-to-integer/description
 */
function romanToInt(s: string): number {
  let result = 0

  for (let index = 0; index < s.length; index++) {
    const char = s[index]
    const nextChar = s[index + 1]
    const nextNextChar = s[index + 2]

    switch (char) {
      case 'M': {
        if (nextChar === 'M') {
          if (nextNextChar === 'M') {
            result += 3000
            index += 2
            continue
          }

          result += 2000
          index += 1
          continue
        }

        result += 1000
        continue
      }
      case 'D': {
        result += 500
        continue
      }
      case 'C': {
        if (nextChar === 'M') {
          result += 900
          index += 1
          continue
        }
        if (nextChar === 'D') {
          result += 400
          index += 1
          continue
        }
        if (nextChar === 'M') {
          if (nextNextChar === 'M') {
            result += 300
            index += 2
            continue
          }

          result += 200
          index += 1
          continue
        }

        result += 100
        continue
      }
      case 'L': {
        result += 50
        continue
      }
      case 'X': {
        if (nextChar === 'C') {
          result += 90
          index += 1
          continue
        }
        if (nextChar === 'L') {
          result += 40
          index += 1
          continue
        }
        if (nextChar === 'X') {
          if (nextNextChar === 'X') {
            result += 30
            index += 2
            continue
          }

          result += 20
          index += 1
          continue
        }

        result += 10
        continue
      }
      case 'V': {
        result += 5
        continue
      }
      case 'I': {
        if (nextChar === 'X') {
          result += 9
          index +=1
          continue
        }
        if (nextChar === 'V') {
          result += 4
          index += 1
          continue
        }
        if (nextChar === 'I') {
          if (nextNextChar === 'I') {
            result += 3
            index += 2
            continue
          }

          result += 2
          index += 1
          continue
        }
        
        result += 1
        continue
      }
      default: {
        throw new Error('invalid character')
      }
    }
  }

  return result
}

export {romanToInt}
