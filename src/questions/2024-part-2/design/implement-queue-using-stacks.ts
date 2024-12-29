/**
 * https://leetcode.com/problems/implement-queue-using-stacks/description
 * We use 2 arrays as stacks (only use pop and peek ([length - 1])).
 * When we push, we push to first stack.
 * When we pop / peek, we pop from first, push to second, and retrieve the last element.
 * Then we pop from second and push to first in order to get refresh the numbers.
 * We don't push back the last element if the operation is pop.
 */
class MyQueue {
  private stack1: number[]
  private stack2: number[]

  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  public push(x: number): void {
    this.stack1.push(x)
  }

  public pop(): number {
    return this.retrieve(true)
  }

  public peek(): number {
    return this.retrieve(false)
  }

  public empty(): boolean {
    return this.stack1.length === 0
  }

  private retrieve(remove: boolean): number {
    const length = this.stack1.length

    for (let index = 0; index < length; index++) {
      const value = this.stack1.pop()

      this.stack2.push(value)
    }

    const result = this.stack2[this.stack2.length - 1]
    this.stack1.length = 0

    if (remove) {
        this.stack2.pop()
    }

    for (let index = 0; index < (remove ? length - 1 : length); index++) {
      const value = this.stack2.pop()

      this.stack1.push(value)
    }

    return result
  }
}

export {MyQueue}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
