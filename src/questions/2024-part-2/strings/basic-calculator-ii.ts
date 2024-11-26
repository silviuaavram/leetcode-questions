/**
 * https://leetcode.com/problems/basic-calculator-ii/description
 * 
 * We parse the string, remove empty spaces, get numbers and operations.
 * We initialise a stack with the first number, then we iterate through the rest.
 * For * and / operations we apply the operation on the last item in the stack.
 * For + and  - operations we just add another number to the stack.
 * On the division we conditionally round the result based on the requirement.
 */
function calculate(s: string): number {
  const parsedString = s.replace(/ /g, '')

  const operations = parsedString.match(/[+-/*]/g) ?? []
  const numbers = parsedString.split(/[+-/*]/g).map(s => Number(s)) ?? []

  const numbersStack: number[] = numbers.splice(0, 1).map(s => Number(s))

  for (let index = 0; index < operations.length; index++) {
    switch (operations[index]) {
      case '*': {
        numbersStack[numbersStack.length - 1] *= numbers[index]
        break
      }
      case '/': {
        const divisionResult =
          numbersStack[numbersStack.length - 1] / numbers[index]

        if (divisionResult < 0) {
          numbersStack[numbersStack.length - 1] = Math.ceil(divisionResult)
        } else {
          numbersStack[numbersStack.length - 1] = Math.floor(divisionResult)
        }

        break
      }
      case '+': {
        numbersStack.push(numbers[index])
        break
      }
      case '-': {
        numbersStack.push(-numbers[index])
        break
      }
      default:
        throw new Error('invalid operation')
    }
  }

  return numbersStack.reduce((acc, num) => acc + num, 0)
}

export {calculate}
