/**
 * https://leetcode.com/problems/lru-cache/description
 *
 * This is super hard to get right.
 * We first create a function makeFirst that will move a node as head list.
 * There are 3 cases: node is first, node is in the middle, node is last.
 * We use this function for the public methods:
 * 1. get, make that node first.
 * 2. put already existing node, make that node first.
 * 3. put new node with capacity 0, make the node head.
 * 4. put new node with remaining capacity, make that node first.
 * 5. put new node with no more capacity, remove the last node from map and list, then move the new node first.
 */

type Node = {
  value: number
  previous: Node
  next: Node
  key: number
}

class LRUCache {
  private nodes: Map<number, Node>
  private capacity: number
  private list: Node

  constructor(capacity: number) {
    this.nodes = new Map()
    this.capacity = capacity
  }

  get(key: number): number {
    if (this.nodes.has(key)) {
      const node = this.nodes.get(key)

      this.makeFirst(node)

      return node.value
    }

    return -1
  }

  put(key: number, value: number): void {
    if (this.nodes.has(key)) {
      const node = this.nodes.get(key)

      node.value = value

      this.makeFirst(node)

      return
    }

    const node = {key, value, next: undefined, previous: undefined}
    node.next = node
    node.previous = node

    if (this.nodes.size === 0) {
      this.nodes.set(key, node)
      this.list = node

      return
    }

    if (this.nodes.size < this.capacity) {
      this.nodes.set(key, node)

      this.makeFirst(node)

      return
    }

    const nodeToRemove = this.list.previous
    this.nodes.delete(nodeToRemove.key)
    this.nodes.set(key, node)

    nodeToRemove.previous.next = nodeToRemove.next
    nodeToRemove.next.previous = nodeToRemove.previous

    this.makeFirst(node)
  }

  private makeFirst(node: Node) {
    if (node === this.list) {
      return
    }

    const nodeIsLast = this.list.previous === node
    const lastNode = nodeIsLast ? node.previous : this.list.previous

    if (nodeIsLast) {
      this.list = node

      return
    }

    node.previous.next = node.next
    node.next.previous = node.previous

    node.previous = lastNode
    node.next = this.list

    this.list.previous = node
    lastNode.next = node

    this.list = node
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export {LRUCache}
