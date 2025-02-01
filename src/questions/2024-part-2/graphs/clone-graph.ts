/**
 * https://leetcode.com/problems/clone-graph/description
 *
 * We parse the graph, copy the nodes and add them to a map.
 * Then for each node and its clone equivalent, we copy the neighbours.
 */

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 *
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 *
 */

import {GraphNode as _Node} from '@typings'

function cloneGraph(node: _Node | null): _Node | null {
  if (!node) {
    return null
  }

  const nodes = new Map<_Node, _Node>()

  function parseNode(current: _Node): void {
    if (nodes.has(current)) {
      return
    }

    nodes.set(current, {val: current.val, neighbors: []})

    for (const neighbor of current.neighbors) {
      parseNode(neighbor)
    }
  }

  parseNode(node)

  for (const [node, clone] of Array.from(nodes.entries())) {
    for (const neighbor of node.neighbors) {
      clone.neighbors.push(nodes.get(neighbor))
    }
  }

  return nodes.get(node)
}

export {cloneGraph}
