import {TreeNodeWithParent as Node} from '@typings'

/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/
 *
 * Definition for a binary tree node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     parent: Node | null
 *     constructor(val?: number, left?: Node | null, right?: Node | null, parent?: Node | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.parent = (parent===undefined ? null : parent)
 *     }
 * }
 */

function lowestCommonAncestor(p: Node | null, q: Node | null): Node | null {
  function getPath(node: Node, path: Node[]) {
    path.push(node)

    if (node.parent) {
      return getPath(node.parent, path)
    }

    return path
  }

  const pathP = getPath(p, []).reverse()
  const pathQ = getPath(q, []).reverse()

  let index: number

  for (index = 0; index < Math.min(pathP.length, pathQ.length); index++) {
    if (pathP[index] !== pathQ[index]) {
      break
    }
  }

  return pathP[index - 1]
}

export {lowestCommonAncestor}
