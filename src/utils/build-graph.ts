import {GraphNode} from '@typings'

export default function buildGraph(adjList: number[][]): GraphNode {
  const graphNodes: GraphNode[] = []

  for (let index = 0; index < adjList.length; index++) {
    if (graphNodes[index] === undefined) {
      graphNodes[index] = {val: index + 1, neighbors: []}
    }

    const node = graphNodes[index]

    for (const neighborIndex of adjList[index]) {
      if (graphNodes[neighborIndex - 1] === undefined) {
        graphNodes[neighborIndex - 1] = {val: neighborIndex, neighbors: []}
      }

      node.neighbors.push(graphNodes[neighborIndex - 1])
    }
  }

  return graphNodes[0]
}
