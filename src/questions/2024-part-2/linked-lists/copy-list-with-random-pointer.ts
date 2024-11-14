/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 */
export type _Node = {
  random: _Node | null
  next: _Node | null
  val: number
}

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: _Node | null): _Node | null {
  const nodeMappings = new Map<_Node, _Node>()

  let currentNode = head

  while (currentNode) {
    nodeMappings.set(currentNode, {
      val: currentNode.val,
      next: null,
      random: null,
    })

    currentNode = currentNode.next
  }

  for (const [oldNode, newNode] of Array.from(nodeMappings.entries())) {
    newNode.random = nodeMappings.get(oldNode.random) ?? null
    newNode.next = nodeMappings.get(oldNode.next) ?? null
  }

  return nodeMappings.get(head) ?? null
}

export {copyRandomList}
