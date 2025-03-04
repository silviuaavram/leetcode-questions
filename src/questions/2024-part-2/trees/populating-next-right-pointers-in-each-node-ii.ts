/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description
 * 
 * We parse the tree with a BFS and store nodes by level.
 * We then iterate through the level arrays and link node.next with the next node in the array, or null if last.
 */

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export type _Node = {
  val: number
  left: _Node | null
  right: _Node | null
  next: _Node | null
}

function connect(root: _Node | null): _Node | null {
  if (!root) {
    return null
  }

  const queue: [_Node, number][] = [[root, 0]]
  const levels = new Map<number, _Node[]>()

  while (queue.length) {
    const [node, level] = queue.shift()

    if (!levels.has(level)) {
      levels.set(level, [])
    }

    levels.get(level).push(node)

    if (node.left) {
      queue.push([node.left, level + 1])
    }

    if (node.right) {
      queue.push([node.right, level + 1])
    }
  }

  for (const level of Array.from(levels.values())) {
    for (let index = 0; index < level.length; index++) {
        level[index].next = level[index + 1] ?? null
    }
  }

  return root
}

export {connect}
