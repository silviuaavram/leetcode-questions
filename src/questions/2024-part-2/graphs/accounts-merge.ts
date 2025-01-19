/**
 * https://leetcode.com/problems/accounts-merge/description
 * 
 * We will use a graph and each distinct email is a node.
 * We link the nodes as we parse the account arrays.
 * Then we parse the graph and return the accounts.
 */
type AccountNode = {
  name: string
  account: string
  neighbours: Set<AccountNode>
}
function accountsMerge(accounts: string[][]): string[][] {
  const nodes = new Map<string, AccountNode>()

  for (const _linkedAccounts of accounts) {
    const [name, ...linkedAccounts] = _linkedAccounts

    for (const account of linkedAccounts) {
      if (!nodes.has(account)) {
        nodes.set(account, {name, account: account, neighbours: new Set()})
      }
    }

    const linkedAccountNodes = linkedAccounts.map(account => nodes.get(account))

    for (const linkedAccountNode of linkedAccountNodes) {
      for (const neighbour of linkedAccountNodes) {
        linkedAccountNode.neighbours.add(neighbour)
      }
    }
  }

  const visited = new Set()

  function parseNode(node: AccountNode, acc: string[]): void {
    if (visited.has(node)) {
      return
    }

    visited.add(node)

    acc.push(node.account)

    for (const neighbour of Array.from(node.neighbours)) {
      parseNode(neighbour, acc)
    }
  }

  const result = []

  for (const node of Array.from(nodes.values())) {
    if (visited.has(node)) {
      continue
    }

    const accounts = []

    parseNode(node, accounts)

    result.push([node.name, ...accounts.sort()])
  }

  return result
}

export {accountsMerge}
