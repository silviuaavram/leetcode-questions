/**
 * https://leetcode.com/problems/clone-graph/
 *
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

import {GraphNode as Node} from '@typings'

function cloneGraph(node: Node | null): Node | null {
  if (!node) {
    return null
  }

  const clones: Node[] = []
  const queue = [node]

  const visited: boolean[] = []

  while (queue.length) {
    const current = queue.splice(0, 1)[0]
    const currentIndex = current.val - 1

    if (clones[currentIndex] === undefined) {
      clones[currentIndex] = {val: current.val, neighbors: []}
    }

    for (const neighbor of current.neighbors) {
      const neighborIndex = neighbor.val - 1

      if (visited[neighborIndex]) {
        continue
      }

      if (clones[neighborIndex] === undefined) {
        clones[neighborIndex] = {val: neighbor.val, neighbors: []}

        queue.push(neighbor)
      }

      clones[currentIndex].neighbors.push(clones[neighborIndex])
      clones[neighborIndex].neighbors.push(clones[currentIndex])
    }

    visited[currentIndex] = true
  }

  return clones[0]
}

export {cloneGraph}
