/**
 * https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/
 */
function minInsertions(s: string): number {
  let insertions = 0
  const stack: string[] = []

  for (let index = 0; index < s.length; index++) {
    const char = s[index]

    if (char === '(') {
      if (stack[stack.length - 1] === ')') {
        if (stack[stack.length - 2] === '(') {
          // ()( -> remove last 2 from stack, add 1 insertion ")"
          insertions++
          stack.pop()
        } else {
          // )( -> remove last 2 from stack, add 2 insertions "()"
          insertions += 2
        }
        stack.pop()
      }

      stack.push('(') // one or more "(" before, just add "(" to the stack
    } else {
      if (stack[stack.length - 1] === ')') {
        if (stack[stack.length - 2] === '(') {
          // ()) -> pop last two from stack as well.
          stack.pop()
          stack.pop()
        } else {
          // )) -> pop last "(" from stack, add 1 insertion "("
          stack.pop()
          insertions++
        }
      } else {
        stack.push(')') // "()" -> push the "(" to the stack
      }
    }
  }

  // last cases like: ), ((..(), ((..(
  if (stack.length) {
    if (stack.join('') === ')') {
      insertions += 2 // insert ()
    } else {
      if (stack[stack.length - 1] === ')') {
        // at least one ( and ending with ), insert one, pop 2 from stack
        insertions++

        stack.pop()
        stack.pop()
      }

      insertions += stack.length * 2 // then count the remaining ( and add 2 insertions for each "))"
    }
  }

  return insertions
}

export {minInsertions}
