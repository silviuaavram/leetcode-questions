import { TreeNodeWithParent } from '@typings'
import buildTree from './build-tree'

export default function buildTreeWithParentNodes(
  values: (number | null)[],
): TreeNodeWithParent {
  const tree = buildTree(values) as TreeNodeWithParent

  function addParent(node: TreeNodeWithParent) {
    if (node.left) {
      node.left.parent = node

      addParent(node.left)
    }

    if (node.right) {
      node.right.parent = node

      addParent(node.right)
    }
  }

  addParent(tree)

  return tree
}
