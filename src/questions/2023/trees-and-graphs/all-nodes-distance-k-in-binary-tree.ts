/**
 * https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
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

function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number,
): number[] {
  const result: number[] = []

  function parseNode(node: TreeNode, distanceParameter: number): number {
    // starting distance is whatever we get as parameter, maybe the node has already been found.
    let distance = distanceParameter

    // we found the node, distance is 0.
    if (node === target) {
      distance = 0
    }

    // we parse left and right to find the node (distance is -1) or pass down the incremented distance (to find closest nodes).
    const distanceLeft = node.left ? parseNode(node.left, distance === -1 ? -1 : distance + 1) : -1
    const distanceRight = node.right ? parseNode(node.right, distance === -1 ? -1 : distance + 1) : -1

    // if the node was not found on the left, but we found it on the right, we trigger another parse on the left, with the distance this time.
    if (node.left && distanceLeft === -1 && distanceRight > -1) {
        parseNode(node.left, distanceRight + 1)
    }

    // same thing on the right.
    if (node.right && distanceRight === -1 && distanceLeft > -1) {
        parseNode(node.right, distanceLeft + 1)
    }

    // we update the current distance if needed (node was found on our left or right)
    if (distance === -1 && distanceLeft > -1) {
        distance = distanceLeft
    }
    
    if (distance === -1 && distanceRight > -1) {
        distance = distanceRight
    }

    // we add the value if the distance is k
    if (distance === k) {
      result.push(node.val)
    }

    // if we have distance information we pass it up, otherwise return -1.
    return distance === -1 ? -1 : distance + 1
  }

  parseNode(root, -1)

  return result
}

export {distanceK}
