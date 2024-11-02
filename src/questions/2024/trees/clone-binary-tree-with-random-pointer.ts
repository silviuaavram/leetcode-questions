/**
 * https://leetcode.com/problems/clone-binary-tree-with-random-pointer/description/
 */

class _Node {
  val: number
  left: _Node | null
  right: _Node | null
  random: _Node | null
  constructor(
    val?: number,
    left?: _Node | null,
    right?: _Node | null,
    random?: _Node | null,
  ) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.random = random === undefined ? null : random
  }
}

class NodeCopy {
  val: number
  left: _Node | null
  right: _Node | null
  random: _Node | null
  constructor(
    val?: number,
    left?: _Node | null,
    right?: _Node | null,
    random?: _Node | null,
  ) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.random = random === undefined ? null : random
  }
}

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, left?: _Node | null, right?: _Node | null, random?: _Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

export function copyRandomBinaryTree(root: _Node | null): NodeCopy | null {
  const nodeCopies = new Map<_Node, NodeCopy>()

  function processNode(node: _Node): NodeCopy | null {
    if (!node) {
      return null
    }

    if (!nodeCopies.has(node)) {
      nodeCopies.set(node, new NodeCopy(node.val))
    } else {
      return nodeCopies.get(node)
    }

    const copy = nodeCopies.get(node)

    copy.left = processNode(node.left)
    copy.right = processNode(node.right)
    copy.random = processNode(node.random)

    return copy
  }

  return processNode(root)
}
