/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/description
 *
 * We create the first path by going from node to parent until null.
 * Then when iterating from the second node, once we find a node from the first path, that's the LCA.
 */

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     parent: _Node | null
 *
 *     constructor(v: number) {
 *         this.val = v;
 *         this.left = null;
 *         this.right = null;
 *         this.parent = null;
 *     }
 * }
 */

export type _Node = {
  val: number
  left: _Node | null
  right: _Node | null
  parent: _Node | null
}

function lowestCommonAncestor(p: _Node | null, q: _Node | null): _Node | null {
  const firstPath = new Set<_Node>()
  let current = p

  while (current) {
    firstPath.add(current)
    current = current.parent
  }

  current = q

  while (current) {
    if (firstPath.has(current)) {
      return current
    }

    current = current.parent
  }

  throw new Error('impossible check input')
}

export {lowestCommonAncestor}
