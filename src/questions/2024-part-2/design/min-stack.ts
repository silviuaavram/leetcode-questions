/**
 * https://leetcode.com/problems/min-stack/description
 * 
 * We keep 2 stacks.
 * One with the numbers in stack order.
 * The other with the minimum value for that position.
 * For the minimum stack, we save the minimum value between pushed value and the value before it.
 * This way, for every position, no matter how much we pop, we are covered, we have the correct minimum.
 */
class MinStack {
  private minStack: number[]
  private numStack: number[]

  constructor() {
    this.minStack = []
    this.numStack = []
  }

  push(val: number): void {
    this.minStack.push(
      Math.min(this.minStack[this.minStack.length - 1] ?? Infinity, val),
    )
    this.numStack.push(val)
  }

  pop(): void {
    this.minStack.pop()
    this.numStack.pop()
  }

  top(): number {
    return this.numStack[this.numStack.length - 1]
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export {MinStack}
