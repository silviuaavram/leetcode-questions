/**
 * https://leetcode.com/problems/basic-calculator-ii/
 */
function calculate(s: string): number {
  let result = 0
  let acc = null
  let number = 0
  let operation: Operation = '+'

  // try to keep track of the previous operation and perform it before we go into the next operation.
  function parseString(index = 0) {
    const char = s[index]

    // if we arrived at the end
    if (index === s.length) {
      if (acc !== null) {
        // do the division / multiplication if there was one in the queue
        result += performOperation(acc, number, operation)
      } else {
        // otherwise just add / subtract the previous number
        result = performOperation(result, number, operation)
      }

      return
    }

    switch (char) {
      case ' ':
        break
      case '+':
      case '-':
        // do the division / multiplication if there was one in the queue
        if (acc !== null) {
          result += performOperation(acc, number, operation)
          acc = null
          number = 0
        } else {
          // otherwise just add / subtract the previous number
          result = performOperation(result, number, operation)
          number = 0
        }

        operation = char
        break
      case '*':
      case '/':
        if (acc === null) {
          // create a multiply / division accumulator if it's the beginning.
          acc = operation === '-' ? -number : number
        } else {
          // otherwise increment it with the previous multiplication / division.
          acc = performOperation(acc, number, operation)
        }

        operation = char
        number = 0
        break
      default: // digit
        number = number * 10 + Number(char)
        break
    }

    parseString(index + 1)
  }

  parseString()

  return Math.floor(result)
}

type Operation = '+' | '-' | '*' | '/'

function performOperation(a: number, b: number, operation: Operation): number {
  let result
  switch (operation) {
    case '+':
      result = a + b
      break
    case '-':
      result = a - b
      break
    case '*':
      result = a * b
      break
    case '/':
      result = a / b
      break
    default:
      throw new Error('Error in perform operation')
  }

  return result < 0 ? Math.ceil(result) : Math.floor(result)
}

export {calculate}
