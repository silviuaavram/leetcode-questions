/**
 * https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/description
 */
function minNumberOperations(target: number[]): number {
  const stack = [target[0]]
  let result = 0

  for (let index = 1; index < target.length; index++) {
    let numberAdded = false

    while (stack.length && stack[stack.length - 1] >= target[index]) {
      const popped = stack.pop()

      if (!numberAdded) {
        result += (popped - target[index])

        numberAdded = true
      }
    }

    stack.push(target[index])
  }

  result += stack[stack.length - 1]

  return result
}

export {minNumberOperations}
