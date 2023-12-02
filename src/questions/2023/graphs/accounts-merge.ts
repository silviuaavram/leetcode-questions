type GraphNode = {
  name: string
  val: string
  neighbours: GraphNode[]
}

/**
 * https://leetcode.com/problems/accounts-merge/
 */
function accountsMerge(accounts: string[][]): string[][] {
  // Keep all mails as graph nodes.
  const allNodes = new Map<string, GraphNode>()

  for (const [name, ...emails] of accounts) {
    // Make a node for each mail, or retrieve it from the map if already there.
    const emailNodes = Array.from(new Set(emails)).map(email => {
      if (allNodes.has(email)) {
        return allNodes.get(email)
      }

      const newNode = {
        name,
        val: email,
        neighbours: [],
      }

      allNodes.set(email, newNode)

      return newNode
    })

    // Whether we retrieve it from the map or create a new node, we add neighbours, first node linking all the others.
    emailNodes[0].neighbours.push(...emailNodes.slice(0))
    for (const emailNode of emailNodes.slice(1)) {
        emailNode.neighbours.push(emailNodes[0])
    }
  }

  // DFS
  const result: string[][] = []
  const visited = new Set<string>()

  function parseNode(node: GraphNode, emails: string[]): void {
    if (visited.has(node.val)) {
      return
    }

    emails.push(node.val)
    visited.add(node.val)

    for (let index = 0; index < node.neighbours.length; index++) {
      parseNode(node.neighbours[index], emails)
    }
  }

  for (const node of Array.from(allNodes.values())) {
    const emails = []

    parseNode(node, emails)

    if (!emails.length) {
      continue
    }

    result.push([node.name, ...emails.sort()])
  }

  return result
}

export {accountsMerge}
