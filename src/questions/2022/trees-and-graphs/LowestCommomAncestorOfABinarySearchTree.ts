/**
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

import {TreeNode} from '../../types'

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  const breadCrumbs = {p: undefined, q: undefined}
  const visited = new Set<TreeNode>()
  const currentBreadCrumb: TreeNode[] = [root]

  while (currentBreadCrumb.length && !(breadCrumbs.p && breadCrumbs.q)) {
    const current = currentBreadCrumb[currentBreadCrumb.length - 1]

    if (current === p) {
      breadCrumbs.p = [...currentBreadCrumb]
    } else if (current === q) {
      breadCrumbs.q = [...currentBreadCrumb]
    }

    if (current.left && !visited.has(current.left)) {
      currentBreadCrumb.push(current.left)

      continue
    }

    if (current.right && !visited.has(current.right)) {
      currentBreadCrumb.push(current.right)

      continue
    }

    visited.add(current)
    currentBreadCrumb.pop()
  }

  let commonAncestor = root

  for (let index = 0; index < Math.min(breadCrumbs.p.length, breadCrumbs.q.length); index++) {
    if (breadCrumbs.p[index] !== breadCrumbs.q[index]) {
      break
    }

    commonAncestor = breadCrumbs.p[index]
    
  }
  return commonAncestor
}
