/**
 * https://leetcode.com/problems/course-schedule-ii/description
 *
 * We create a graph by drawing unidirectional edge between prerequisite and course. [0, 1] means (1) -> (0).
 * It's a topological sort. A bit different than course-schedule where we just need to find a cycle.
 * Here we visit each node, and keep the current path in memory. If visited node is in the path => cycle, so we return.
 * Once we are done with visiting the node (go through neighbours), we add it to the result, and remove it from path.
 * We return the result backwards, since we need the order of traversal, and in initial result, last visited nodes are first.
 */
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph = new Map<number, number[]>()
  const result = []

  for (const [source, destination] of prerequisites) {
    if (!graph.has(destination)) {
      graph.set(destination, [])
    }

    graph.get(destination).push(source)
  }

  function visit(course: number, path: Set<number>): boolean {
    const neighbours = graph.get(course) ?? []

    if (path.has(course)) {
      return false
    }

    if (result.indexOf(course) > -1) {
      return true
    }

    path.add(course)

    for (const neighbour of neighbours) {
      const result = visit(neighbour, path)

      if (!result) {
        return false
      }
    }

    result.push(course)
    path.delete(course)

    return true
  }

  for (let index = 0; index < numCourses; index++) {
    if (result.indexOf(index) > -1) {
      continue
    }

    if (!visit(index, new Set())) {
      return []
    }
  }

  return result.reverse()
}

export {findOrder}
