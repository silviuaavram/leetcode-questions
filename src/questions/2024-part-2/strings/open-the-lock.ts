/**
 * https://leetcode.com/problems/open-the-lock/description
 * 
 * We imagine the problem as a graph traversal, where each combination is a node.
 * Edges between nodes represent if we can move from one code to another.
 * For example, 0000 has links with 1000, 9000, 0100, ...
 * We do a BFS from 0000 in order to get the fastest way to the target node.
 * When we process a node, we add its neighbours to the queue, and also mark them as visited.
 */
function openLock(deadends: string[], target: string): number {
  if (deadends.indexOf('0000') > -1) {
    return -1
  }

  const nextChars = {
    0: {next: 1, prev: 9},
    1: {next: 2, prev: 0},
    2: {next: 3, prev: 1},
    3: {next: 4, prev: 2},
    4: {next: 5, prev: 3},
    5: {next: 6, prev: 4},
    6: {next: 7, prev: 5},
    7: {next: 8, prev: 6},
    8: {next: 9, prev: 7},
    9: {next: 0, prev: 8},
  }

  function getNextCombinations(combination: string): string[] {
    const result = []

    for (let index = 0; index < 4; index++) {
      const next = combination.split('')
      next[index] = nextChars[combination[index]].next

      const previous = combination.split('')
      previous[index] = nextChars[combination[index]].prev

      result.push(next.join(''), previous.join(''))
    }

    return result
  }

  const visited = new Set([...deadends, '0000'])
  const queue = [{val: '0000', level: 0}]

  while (queue.length) {
    const current = queue.splice(0, 1)[0]

    if (current.val === target) {
      return current.level
    }

    const nextCombinations = getNextCombinations(current.val).filter(
      combination => !visited.has(combination),
    )

    queue.push(
      ...nextCombinations.map(val => ({val, level: current.level + 1})),
    )

    for (const nextCombination of nextCombinations) {
      visited.add(nextCombination)
    }
  }

  return -1
}

export {openLock}
