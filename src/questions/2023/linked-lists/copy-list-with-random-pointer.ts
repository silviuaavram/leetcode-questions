export interface Node {
  random: Node | null
  next: Node | null
  val: number
}

/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 *
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  const nodesMap = new Map<Node, Node>()

  let currentNode = head

  // we store a copy of each node, with null next and random since we don't know these new nodes yet.
  while (currentNode) {
    nodesMap.set(currentNode, {val: currentNode.val, next: null, random: null})

    currentNode = currentNode.next
  }

  currentNode = head

  // we go through the nodes again and assign to each node's copy the new random and next, since we have them now.
  while (currentNode) {
    const newNext = nodesMap.get(currentNode.next)
    const newRandom = nodesMap.get(currentNode.random) ?? null
    const newCurrent = nodesMap.get(currentNode)

    newCurrent.next = newNext
    newCurrent.random = newRandom

    currentNode = currentNode.next
  }

  return nodesMap.get(head) ?? null
}

export {copyRandomList}
