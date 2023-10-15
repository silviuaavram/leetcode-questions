import {TreeNode} from '../typings/treesAndGraphs'

export default function buildTree(values: (number | null)[]): TreeNode | null {
  if (!values?.length) {
    return null
  }

  const root: TreeNode = {val: values[0]}
  const nodes: TreeNode[] = [root]

  for (let index = 1; index < values.length; index++) {
    const parent = nodes[0]
    const value = values[index]
    const isValueNull = value == null

    const node = isValueNull ? null : {val: values[index]}

    if (parent.left === undefined) {
      parent.left = node
    } else {
      parent.right = node
      nodes.splice(0, 1)
    }

    if (!isValueNull) {
      nodes.push(node)
    }
  }

  while (nodes.length) {
    const node = nodes[0]

    if (node.left === undefined) {
      node.left = null
    }

    if (node.right === undefined) {
      node.right = null
    }

    nodes.splice(0, 1)
  }

  return root
}
