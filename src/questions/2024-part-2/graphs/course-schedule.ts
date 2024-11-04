/**
 * https://leetcode.com/problems/course-schedule/description
 * 
 * We will create a one-directional graph based on prerequisites.
 * We will traverse the graph and if there's a cycle, means we can't finish the courses.
 * To optimise traversals we keep a visited set which we update with nodes after each traversal.
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph = new Map<number, number[]>()
  const visited = new Set<number>()

  for (const [source, destination] of prerequisites) {
    if (!graph.has(source)) {
      graph.set(source, [destination])
    } else {
      graph.get(source).push(destination)
    }
  }

  function visit(source: number, trail: Set<number> = new Set()): boolean {
    if (!graph.has(source)) {
      return true
    }

    for (const neighbour of graph.get(source)) {
      if (trail.has(neighbour)) {
        return false
      }

      if (visited.has(neighbour)) {
        continue
      }

      if (!visit(neighbour, new Set(trail).add(source))) {
        return false
      }
    }

    trail.forEach(node => visited.add(node))

    return true
  }

  for (let index = 0; index < numCourses; index++) {
    if (visited.has(index)) {
      continue
    }

    if (!visit(index)) {
      return false
    }
  }

  return true
}

export {canFinish}
