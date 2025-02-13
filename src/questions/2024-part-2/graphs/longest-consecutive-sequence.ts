/**
 * https://leetcode.com/problems/longest-consecutive-sequence/description
 * 
 * We parse the numbers and organise them as a graph.
 * We link the consecutive ones.
 * When we parse the graphs, we check the longest length.
 */

import {GraphNode} from '@typings'

function longestConsecutive(nums: number[]): number {
  const graph = new Map<number, GraphNode>()

  for (const num of nums) {
    if (graph.has(num)) {
      continue
    }

    const node: GraphNode = {val: num, neighbors: []}

    if (graph.has(num - 1)) {
      node.neighbors.push(graph.get(num - 1))
      graph.get(num - 1).neighbors.push(node)
    }

    if (graph.has(num + 1)) {
      node.neighbors.push(graph.get(num + 1))
      graph.get(num + 1).neighbors.push(node)
    }

    graph.set(num ,node)
  }

  let result = 0
  let currentLength
  const visited = new Set()

  function parseNode(node: GraphNode) {
    if (visited.has(node)) {
        return
    }

    visited.add(node)
    currentLength++

    for (const neighbor of node.neighbors) {
        parseNode(neighbor)
    }
  }

  for (const node of Array.from(graph.values())) {
    if (visited.has(node)) {
        continue
    }

    currentLength = 0

    parseNode(node)

    result = Math.max(currentLength, result)
  }


  return result
}

export {longestConsecutive}
