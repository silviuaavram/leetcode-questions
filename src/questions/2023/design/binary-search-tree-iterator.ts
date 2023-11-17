/**
 * https://leetcode.com/problems/binary-search-tree-iterator/
 *
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import {TreeNode} from '@typings'

class BSTIterator {
  private nodes: TreeNode[]
  private visited: Set<TreeNode>
  private readyNext: TreeNode

  constructor(root: TreeNode | null) {
    this.nodes = [root]
    this.visited = new Set()
  }

  next(): number {
    if (this.readyNext) {
      const result = this.readyNext.val

      this.readyNext = null

      return result
    }

    return this.getNext()?.val
  }

  hasNext(): boolean {
    if (this.readyNext) {
      return true
    }

    const next = this.getNext()

    if (next) {
      this.readyNext = next
    }

    return !!next
  }

  private getNext(): TreeNode {
    let result: TreeNode

    while (!result && this.nodes.length) {
      const current = this.nodes[this.nodes.length - 1]

      if (current.left && !this.visited.has(current.left)) {
        this.nodes.push(current.left)

        continue
      }

      if (!this.visited.has(current)) {
        this.visited.add(current)
        return current
      }

      if (current.right && !this.visited.has(current.right)) {
        this.nodes.push(current.right)

        continue
      }

      this.nodes.pop()
    }

    return result
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

export {BSTIterator}
