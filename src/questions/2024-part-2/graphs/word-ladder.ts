/**
 * https://leetcode.com/problems/word-ladder/description
 * 
 * We build a graph where words that differ by one char are neighbours.
 * We need a BFS to find a way between beginWord and endWord.
 * We fill the BFS queue with all the words that differ from beginWord by one char.
 * As we process, we need to add the nodes to to the visited Set just after we add them to the queue for processing.
 * Otherwise we end up adding duplicate nodes in the queue.
 */
function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  if (!new Set(wordList).has(endWord)) {
    return 0
  }

  function areWordsClose(word1: string, word2: string): boolean {
    let changed = false

    for (let index = 0; index < word1.length; index++) {
      if (word1[index] !== word2[index]) {
        if (changed) {
          return false
        }

        changed = true
      }
    }

    return true
  }

  const nodesGraph = new Map<string, string[]>()

  for (let index1 = 0; index1 < wordList.length; index1++) {
    for (let index2 = index1 + 1; index2 < wordList.length; index2++) {
      const word1 = wordList[index1]
      const word2 = wordList[index2]

      if (!nodesGraph.has(word1)) {
        nodesGraph.set(word1, [])
      }
      if (!nodesGraph.has(word2)) {
        nodesGraph.set(word2, [])
      }

      if (areWordsClose(word1, word2)) {
        nodesGraph.get(word1).push(word2)
        nodesGraph.get(word2).push(word1)
      }
    }
  }

  let result: number | undefined = undefined
  const nodesQueue = []
  const visitedNodes = new Set()

  for (let index = 0; index < wordList.length; index++) {
    if (areWordsClose(beginWord, wordList[index])) {
      nodesQueue.push([wordList[index], 1])
      visitedNodes.add(wordList[index])

    }
  }

  while (nodesQueue.length) {
    const [currentWord, currentDistance] = nodesQueue.shift()

    if (endWord === currentWord) {
      return currentDistance + 1
    }

    const neighbours = nodesGraph.get(currentWord)

    for (const neighbour of neighbours) {
      if (!visitedNodes.has(neighbour)) {
        nodesQueue.push([neighbour, currentDistance + 1])
        visitedNodes.add(neighbour)
      }
    }

  }

  return result ?? 0
}

export {ladderLength}
