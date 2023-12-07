/**
 * https://leetcode.com/problems/diameter-of-n-ary-tree/
 *
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

export type Node = {
  val: number
  children: Node[]
}

function diameter(root: Node): number {
  let maxDiameter = 0

  function parseNode(node: Node) {
    if (node.children.length === 0) {
      return 1
    }

    const distances = node.children.map(child => parseNode(child))

    for (let index1 = 0; index1 < distances.length; index1++) {
      for (let index2 = 0; index2 < distances.length; index2++) {
        if (index1 === index2) {
          continue
        }

        maxDiameter = Math.max(
          maxDiameter,
          distances[index1] + distances[index2],
        )
      }
    }

    const maxDistance = Math.max(...distances)

    maxDiameter = Math.max(maxDistance, maxDiameter)

    return maxDistance + 1
  }

  parseNode(root)

  return maxDiameter
}

export {diameter}
