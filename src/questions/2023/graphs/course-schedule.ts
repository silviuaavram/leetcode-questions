/**
 * https://leetcode.com/problems/course-schedule/
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const links: number[][] = []
  const permanentVisit: boolean[] = []
  const temporaryVisit: boolean[] = []

  for (const [dependent, dependency] of prerequisites) {
    if (dependent === dependency) {
      return false
    }

    if (links[dependent] === undefined) {
      links[dependent] = []
    }

    links[dependent].push(dependency)
  }

  // DFS parse of a node.
  function parseNode(node: number): boolean {
    // if we parsed the node already, it's fine.
    if (permanentVisit[node]) {
      return true
    }

    // if we are parsing this node currently, it's a cycle.
    if (temporaryVisit[node]) {
      return false
    }

    temporaryVisit[node] = true // mark the node as currently in parse mode

    // parse its dependencies.
    const parseResult = (links[node] ?? []).reduce((acc, link) => {
      return acc && parseNode(link)
    }, true)

    if (parseResult === false) {
      return false
    }

    temporaryVisit[node] = false // unmark as parsing
    permanentVisit[node] = true // and mark as parsed

    return true
  }

  for (let index = 0; index < numCourses; index++) {
    if (!permanentVisit[index]) {
      const result = parseNode(index)

      if (!result) {
        return false
      }
    }
  }

  return true
}

export {canFinish}
