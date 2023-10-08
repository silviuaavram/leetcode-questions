import {TreeNode} from '@typings'

/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  // Returns the trail of nodes from root up to value.
  function getNodeTrail(
    node: TreeNode,
    value: TreeNode,
    trail: TreeNode[] = [],
  ): TreeNode[] | null {
    // first we add the node to the trail
    trail.push(node)

    // if it's the node, return the trail.
    if (node === value) {
      return trail
    }

    let childTrail

    // otherwise see if the left trail has the none.
    if (node.left) {
      childTrail = getNodeTrail(node.left, value, trail)
    }

    // try the right trail if node is not on theleft trail.
    if (!childTrail && node.right) {
      childTrail = getNodeTrail(node.right, value, trail)
    }

    // if the node was not on any of the trails, means that this trail is a dead end.
    if (!childTrail) {
      // pop the node from the trail and notify its parent that the trail is dead.
      trail.pop()
      return null
    }

    // if we found the node on a trail, return that trail to the parent.
    return childTrail
  }

  const trailP = getNodeTrail(root, p)
  const trailQ = getNodeTrail(root, q)

  let index

  for (index = 0; index < Math.min(trailP.length, trailQ.length); index++) {
    if (trailP[index] !== trailQ[index]) {
      return trailP[index - 1]
    }
  }

  return trailP[index - 1]
}

export {lowestCommonAncestor}
