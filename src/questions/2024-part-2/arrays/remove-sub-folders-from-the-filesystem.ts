/**
 * https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/description
 * 
 * We will use a Trie to triage the subfolders. There will be some cases to handle.
 * 1. If the current node does not have the current string, we create one, and process further.
 * 2. If the current node has the string:
 * 2.1. If the node corresponding to the string is empty, means there's already a folder and we currently process a subfolder. We return.
 * 2.2. Else, if the path we process ends there, means we process a folder, and we found its subfolder(s), so we remove them.
 * 2.3. Else, we process further.
 * Then, with the resulting Trie, we process to the leaves and push each resulting path to main result
*/

type TrieNode = Map<string, TrieNode>

function removeSubfolders(folder: string[]): string[] {
  const paths = folder.map(f => f.split('/').slice(1))

  const trie = new Map<string, TrieNode>()

  function processFolder(path: string[], currentNode: TrieNode) {
    if (!path.length) {
      return
    }

    const currentString = path[0]
    const restPath = path.slice(1)

    if (!currentNode.has(currentString)) {
      const newNode = new Map()

      currentNode.set(currentString, newNode)

      processFolder(restPath, newNode)
    } else {
      const nextNode = currentNode.get(currentString)
      if (nextNode.size === 0) {
        return
      } else {
        if (restPath.length === 0) {
          nextNode.clear()
        } else {
          processFolder(restPath, nextNode)
        }
      }
    }
  }

  for (const path of paths) {
    processFolder(path, trie)
  }

  function processNode(current: TrieNode, path: string[]) {
    if (!current.size) {
      result.push('/' + path.join('/'))

      return
    }

    for (const [value, children] of Array.from(current.entries())) {
      processNode(children, [...path, value])
    }

  }

  const result = []

  for (const [value, children] of Array.from(trie)) {
    processNode(children, [value])
  }


  return result
}

export {removeSubfolders}
