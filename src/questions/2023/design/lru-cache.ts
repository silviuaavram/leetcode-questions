/**
 * https://leetcode.com/problems/lru-cache/
 */
type DoubleListNode = {
  next: DoubleListNode
  prev: DoubleListNode
  val: number
  key: number
}

class LRUCache {
  private capacity: number
  private list: DoubleListNode
  private values: Map<number, DoubleListNode>
  private size: number

  constructor(capacity: number) {
    this.capacity = capacity
    this.size = 0
    this.values = new Map()
  }

  printList(): void {
    let node = this.list
    const result: number[] = []

    if (!this.list) {
      return
    }

    do {
      result.push(node.key)
      node = node.next
    } while (node !== this.list)

    console.log(result.join(' '))
  }

  get(key: number): number {
    if (this.values.has(key)) {
      const node = this.values.get(key)

      if (this.list !== node) {
        node.prev.next = node.next
        node.next.prev = node.prev

        node.next = this.list
        node.prev = this.list.prev

        node.next.prev = node
        node.prev.next = node

        this.list = node
      }

      return node.val
    }

    return -1
  }

  put(key: number, value: number): void {
    if (this.values.has(key)) {
      const node = this.values.get(key)

      node.val = value

      if (this.list === node) {
        return
      }

      node.prev.next = node.next
      node.next.prev = node.prev

      node.next = this.list
      node.prev = this.list.prev

      node.next.prev = node
      node.prev.next = node

      this.list = node

      return
    }

    const newNode: DoubleListNode = {prev: null, next: null, val: value, key}
    this.values.set(key, newNode)

    if (!this.list) {
      newNode.prev = newNode
      newNode.next = newNode

      this.list = newNode
      this.size = 1

      return
    }

    const isFull = this.size === this.capacity

    if (!isFull) {
      this.size++

      newNode.next = this.list
      newNode.prev = this.list.prev

      newNode.next.prev = newNode
      newNode.prev.next = newNode

      this.list = newNode
    } else {
      this.values.delete(this.list.prev.key)

      newNode.next = this.list
      newNode.prev = this.list.prev.prev

      newNode.next.prev = newNode
      newNode.prev.next = newNode

      this.list = newNode
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export {LRUCache}
