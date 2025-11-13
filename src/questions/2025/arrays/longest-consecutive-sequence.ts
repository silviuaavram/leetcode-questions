/**
 * https://leetcode.com/problems/longest-consecutive-sequence/description
 */
type Node = {
  links: Node[]
}
function longestConsecutive(nums: number[]): number {
  const nodes = new Map<number, Node>()

  for (const num of nums) {
    if (nodes.has(num)) {
      continue
    }

    const node = {links: []}

    if (nodes.has(num - 1)) {
      node.links.push(nodes.get(num - 1))
      nodes.get(num - 1).links.push(node)
    }

    if (nodes.has(num + 1)) {
      node.links.push(nodes.get(num + 1))
      nodes.get(num + 1).links.push(node)
    }

    nodes.set(num, node)
  }

  const visited = new Set<Node>()
  let longestConsecutive = 0

  for (const node of Array.from(nodes.values())) {
    if (visited.has(node)) {
      continue
    }

    visited.add(node)

    let currentConsecutive = 1
    longestConsecutive = Math.max(currentConsecutive, longestConsecutive)

    const queue = node.links.filter(n => !visited.has(n))

    while (queue.length) {
      currentConsecutive++
      longestConsecutive = Math.max(currentConsecutive, longestConsecutive)

      const [parsedNode] = queue.splice(0, 1)
      visited.add(parsedNode)

      queue.push(...parsedNode.links.filter(n => !visited.has(n)))
    }
  }

  return longestConsecutive
}

export {longestConsecutive}
