/**
 * https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero
 * 
 * We treat the graph as non-directional and do a dfs from node 0.
 * We use a map to save the links, as a matrix of false/true can be costly in terms of time.
 * n^2 because we do a dfs O(n) and then we iterate in the matrix to check which nodes are neighbours.
 * In the map we also save whether the link is incoming or not.
 * When we loop in the dfs, if the loop is not incoming, it means we switch it.
 */
function minReorder(n: number, connections: number[][]): number {
  const visited = new Set()
  const links = new Map<number, {node: number, incoming: boolean}[]>()
  let result = 0

  for (let index = 0; index < n; index++) {
    links.set(index, [])
  }

  for (const [source, destination] of connections) {
    links.get(source).push({node: destination, incoming: false})
    links.get(destination).push({node: source, incoming: true})
  }

  function visit(node: number): void {
    visited.add(node)

    const neighbours = links.get(node)

    for (const {node, incoming} of neighbours) {
        if (visited.has(node)) {
            continue
        }

        if (!incoming) {
            result++
        }

        visit(node)
    }
  }

  visit(0)

  return result
}

export {minReorder}
