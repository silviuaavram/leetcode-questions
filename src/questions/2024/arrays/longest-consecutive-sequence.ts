/**
 * https://leetcode.com/problems/longest-consecutive-sequence/description
 */
export function longestConsecutive(duplicatedNums: number[]): number {
  const numsSet = new Set(duplicatedNums)
  const nums = Array.from(numsSet)
  const graph = new Map<number, number[]>()

  function setLink(num1: number, num2: number): void {
    if (!graph.has(num1)) {
      graph.set(num1, [])
    }

    graph.get(num1).push(num2)
  }

  for (const num of nums) {
    if (numsSet.has(num - 1)) {
      setLink(num, num - 1)
    }
    if (numsSet.has(num + 1)) {
      setLink(num, num + 1)
    }
  }

  let result = 0

  const visited = new Set()

  function parseNode(node: number): void {
    const toVisit = [node]
    let length = 0

    while (toVisit.length) {
      const currentNode = toVisit.splice(0, 1)[0]
      const neighbours = graph.get(currentNode) ?? []

      visited.add(currentNode)
      length++

      for (const neighbour of neighbours) {
        if (!visited.has(neighbour)) {
          toVisit.push(neighbour)
        }
      }
    }

    result = Math.max(length, result)
  }

  for (const num of nums) {
    parseNode(num)
  }

  return result
}
